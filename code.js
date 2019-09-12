const crypto = require('crypto');

function randomString() {
  return crypto.randomBytes(100).toString('hex');
}

app.get('/compute-sync', function computeSync(req, res) {
  log('computing sync!');
  const hash = crypto.createHash('sha256');
  for (let i=0; i < 10e6; i++) {
    hash.update(randomString())
  }
  res.send(hash.digest('hex') + '\n');
});