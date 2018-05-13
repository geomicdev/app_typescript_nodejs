"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
exports.app = express_1.default();
exports.app.use(body_parser_1.json());
exports.app.get('/', function (req, res) {
    res.send({ success: true, content: '123123213' });
});
