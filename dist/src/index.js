"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./helpers/connectDatabase");
var app_1 = require("./app");
app_1.app.listen(3000, function () { return console.log('Server started'); });
