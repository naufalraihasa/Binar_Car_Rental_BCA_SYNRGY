"use strict";
// import { Knex } from 'knex';
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
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes all existing entries in the "cars" table
        yield knex("cars").del();
        // Insert 5 sample records into the "cars" table
        yield knex("cars").insert([
            {
                name: "Car 1",
                price: 20000,
                size: "Compact",
                image: "car1.jpg",
            },
            {
                name: "Car 2",
                price: 25000,
                size: "Sedan",
                image: "car2.jpg",
            },
            {
                name: "Car 3",
                price: 30000,
                size: "SUV",
                image: "car3.jpg",
            },
            {
                name: "Car 4",
                price: 35000,
                size: "Truck",
                image: "car4.jpg",
            },
            {
                name: "Car 5",
                price: 40000,
                size: "Convertible",
                image: "car5.jpg",
            },
        ]);
    });
}
exports.seed = seed;
