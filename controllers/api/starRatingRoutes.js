const router = require('express').Router();
const { StarRating } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/starRating', withAuth, async (req, res) => { //tested successfully
  try {
    const newStarRating = await StarRating.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newStarRating);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/starRating/:id', withAuth, async (req, res) => { //TODO
  
  try {
    const oldStarRating = await StarRating.update({
      where: {
        id: req.params.id, //story ID
        user_id: req.session.user_id,
      },
    });
    if (!oldStarRating) {
      res.status(404).json({ message: 'No story found with this id!' });
      return;
    }

    res.status(200).json(oldStarRating);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
