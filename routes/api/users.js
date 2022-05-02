const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
        .isLength({ min: 6 })

],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // See if user exists
            let user = await User.findOne({ Email });

            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            // Get user gravatar
            const avatar = gravatar.url(Email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            user = new User({
                name,
                email,
                password
            });

            // Encrypt password
            const salt = await bcrypt.genSalt(10);

            //user.password = await bcrypt.hash(password, salt);

            await user.save();

            const userDetails = user.Email;


            // Your user is created
            // Now lets send them an email

            var mailOptions = {
                from: 'the3percent Team', // sender address
                to: Email, // This can also contain an array of emails
                subject: 'Thanks for Registering with the3percent',
                // text: 'Hello world ?', // plaintext body
                html:
                    `
                    <tr>
                        <h1>WELCOME to the3percent!</h1>
                    </tr>

                    Link =  "https://the3percentapp.herokuapp.com/clientconfirmation
              
                `
            };
            var transporter = nodemailer.createTransport(smtpTransport({
                service: 'gmail',
                auth: {
                    user: 'madhuka@xdigital.solutions',
                    pass: 'Virajith@#$%2260'
                }
            }))

            // send mail with defined transport object
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
            });


            // Return jsonwebtoken
            const payload = {
                user: {
                    id: user.id,
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (error, token) => {
                    if (error) throw error;
                    res.json({ token });
                });

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    });


module.exports = router;