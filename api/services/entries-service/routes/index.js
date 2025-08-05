const express = require('express');
const router = express.Router();

const routes = [{ path: `/`, file: 'entries-routers' }];

router.get('/ping', (req, res) => {
  res.send({ service: 'Common  Service', status: '🟢 Running' });
});

routes.forEach((route) => {
  router.use(route.path, require(`./${route.file}`));
});

module.exports = router;
