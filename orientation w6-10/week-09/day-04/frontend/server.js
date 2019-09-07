'use strict';

// const express = require('express');
const app = require('./app');
const PORT = 2999;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});