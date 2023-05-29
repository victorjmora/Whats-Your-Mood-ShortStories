const router = require('express').Router();
const { Story } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newStory = await Story.create({
      ...req.body,
      story_id: req.session.story_id,
    });

    res.status(200).json(newStory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const storyData = await Story.destroy({
      where: {
        id: req.params.id,
        story_id: req.session.story_id,
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