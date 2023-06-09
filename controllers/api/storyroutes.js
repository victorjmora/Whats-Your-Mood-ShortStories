const router = require('express').Router();
const { Story } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => { //tested successfully
  try {
    const newStory = await Story.create({
      ...req.body,
      user_id: req.session.user_id,
      author: req.session.username,
    });

    res.status(200).json(newStory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  console.log("delete route reached on the backend");
  try {
    const storyData = await Story.destroy({
      where: {
        id: req.params.id,
        //user_id: req.session.user_id,
      },
    });
    if (!storyData) {
      res.status(404).json({ message: 'No story found with this id!' });
      return;
    }

    res.status(200).json(storyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
