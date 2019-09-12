const hash = crypto.createHash('sha256');
for (let i=0; i < 10e6; i++) {
    hash.update(randomString())
}
res.send(hash.digest('hex') + '\n');