const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');

// Used asnyc method await on items that return a promise instead of doing .then() etc...

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
  check('name', 'Name is required')//Check that the name isn't empty
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(), //check that the email syntax is valid
  check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 }) //check if password is atleast 8 digits
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });  //if any checks fail, we get an array of errors
    }

    const { name, email, password } = req.body; //instead of doing req.body.name, etc...
    try {

      // See if user exists
      let user = await User.findOne({ email }); //assign user variable to a find query with param email

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }
      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200', //default size
        r: 'pg', //rating for explicity
        d: 'mm' //default image if user gravatar doesn't exists
      });

      // Encrypt the password
      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10); //hash salt used for encrypting password
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Return jsonwebtoken

      res.send('User registered');
    }
    catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }

  });

module.exports = router;