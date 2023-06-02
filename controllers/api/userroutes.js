const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No story found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => { //this is the endpoint for logging in
  try {
    const userData = await User.findOne({ where: { email: req.body.email } }); //find the user in the database using their email

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' }); //if the email is wrong, tell them
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password); //if the email exists in the db, then check the password

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' }); //if the password is wrong, tell them
      return;
    }

    req.session.save(() => {   //if the email and password are correct, then start a session
      req.session.user_id = userData.id; //save the user_id to the session object
      req.session.logged_in = true; //save the variable logged_in (boolean) as true to the session
      req.session.username = userData.username; //save the username to session object

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {  //this is the endpoint for logging out
  if (req.session.logged_in) {  //if the logged_in variable on the session is true, then... 
    req.session.destroy(() => {   //end the session (effectively logging the person out)
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
