// Trivial app used only so npm ci has real deps to resolve.
const express = require('express');
const app = express();
app.get('/', (_req, res) => res.send('stepsec-poc-lab ok'));
module.exports = app;
