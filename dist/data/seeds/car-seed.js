"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const seed = (knex) => __awaiter(void 0, void 0, void 0, function* () {
    // Truncate all existing tables
    yield knex.raw('TRUNCATE TABLE "user" CASCADE');
    yield knex.raw('TRUNCATE TABLE "channel" CASCADE');
    yield knex.raw('TRUNCATE TABLE "video" CASCADE');
    yield knex('channel').insert([
        { id: 1, name: 'channel1' },
        { id: 2, name: 'channel2' },
        { id: 3, name: 'channel3' },
    ]);
    yield knex('user').insert([
        { id: 1, name: 'user1', email: 'user1@gmail.com', channelId: 1 },
        { id: 2, name: 'user2', email: 'user2@gmail.com', channelId: 2 },
        { id: 3, name: 'user3', email: 'user3@gmail.com' },
    ]);
    yield knex('video').insert([
        { id: 1, title: 'video1', channelId: 1 },
        { id: 2, title: 'video2', channelId: 1 },
        { id: 3, title: 'video3', channelId: 2 },
        { id: 4, title: 'video4', channelId: 2 },
    ]);
});
exports.seed = seed;
