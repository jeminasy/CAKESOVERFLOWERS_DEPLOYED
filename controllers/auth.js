const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/user');
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    const duplicate = await User.findOne({email});

    if (duplicate) {
        return next(new ErrorResponse(
            "User already registered. Try logging in instead",
            400
        ));
    }

    try {
        const user = await User.create({
            firstName,
            lastName,
            email, 
            password
        });
        sendToken(user, 200, res);
    } catch(error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return next(new ErrorResponse(
            "Please provide an email and password", 400
        ));
    }

    try {
        const user = await User.findOne({email}).select("+password");

        if (!user) {
            return next(new ErrorResponse(
                "Invalid Credentials", 401
            ));
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        sendToken(user, 200, res);

    } catch(err) {
        next(err);
    }
};

exports.forgotPassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return next(new ErrorResponse("Failed to send email", 404));
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

        const message = `
            <h1>Password Reset</h1>
            <p>If you've lost your password or wish to reset it, please use the link below to get started</p>
            <a href=${resetUrl}>${resetUrl}</a>
        `;

        try {
            await sendEmail({
                to: user.email,
                subject: "Password Reset Request",
                text: message,
            });

            res.status(200).json({success: true, data: "Email Sent"});
        } catch(err) {
            console.log(err);

            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(new ErrorResponse(
                "Failed to send email", 500
            ));
        }
    } catch(err) {
        next(err);
    }
};

exports.resetPassword = async(req, res, next) => {
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.resetToken)
        .digest("hex");

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
            return next(new ErrorResponse(
                "Invalid Token", 400
            ));
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(201).json({
            success: true,
            data: "Password Updated Successfully",
            token: user.getSignedJwtToken(),
        });
    } catch(err) {
        next(err);
    }
};

exports.changePassword = async(req, res, next) => {

};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ success: true, token});
};