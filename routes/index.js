const router = require('express').Router();


router.use('/', apiRoutes);

router.use((req, res) => {
  res.status(404).send('404 Error');
});

module.exports = router;
