"use strict";
// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_setup_1 = __importDefault(require("./config/db-setup"));
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./src/models/user"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, db_setup_1.default)();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// In production, you would want to use a router in a separate file
app.get('/users/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.query().findById(id).withGraphFetched('channel');
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is currently running at http://localhost:${PORT}`);
});
