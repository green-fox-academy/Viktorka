'use strict';

// const express = require('express');
const app = require('./app/app');
const PORT = 3123;



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});