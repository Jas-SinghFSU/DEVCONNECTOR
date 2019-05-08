const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');


// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate User and Get Token
// @access  Public
router.post('/', [
  check('email', 'Please include a valid email').isEmail(), //check that the email syntax is valid
  check('password', 'Password is required.').exists() //check if password is atleast 8 digits
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });  //if any checks fail, we get an array of errors
    }

    const { email, password } = req.body; //instead of doing req.body.name, etc...
    try {

      // See if user exists
      let user = await User.findOne({ email }); //assign user variable to a find query with param email

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Incorrect username or password.' }] });
      };

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Incorrect username or password.' }] });
      }

      // Return jsonwebtoken
      const payload = { //create payload
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    }
    catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }

  });


module.exports = router;