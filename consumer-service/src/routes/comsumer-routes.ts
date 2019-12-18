/**
 * @namespace
 * @module Routes
 * @description Route details for P2P API serive.
 * */
import * as dotenv from "dotenv";
import express from "express";
import log from "../utils/logger";
import UsersService from "../services/userService";
import { success, fail } from "../utils/response-helpers";

dotenv.config();
const comsumerRoutes = express.Router();
const usersService = new UsersService();

/**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */

comsumerRoutes.get("/", (req, res) => {
    res.end("P2P API admin service for admin module is working");
});

/**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */

comsumerRoutes.get("/consumer", async (req, res) => {
    try {
        res.json(
            success("Successful signup", await usersService.comsumerEventCall())
        );
    } catch (ex) {
        res.json(fail("failed signup", ex));
    }
});

export default comsumerRoutes;
