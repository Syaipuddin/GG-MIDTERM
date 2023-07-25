import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import appRoutes from '../route/routes.js';

// CLOUDINARY CONFIG
import { cldConfig } from '../helper/cloudinary.js';
cldConfig();

const app = express();
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

export const rest = () => {

    try {

        mongoose.connect(MONGO_URI);
        const db = mongoose.connection;

        db.on('error', (err) => {
            console.log(`Failed to Connect to DB with error = ${err.message}`)
        })

        db.once('connected', () => {
            console.log(`Database Connected`);

            app.use(express.json());

            app.use(appRoutes);

            app.listen(PORT, () => {
                console.log(`App running on Port = ${PORT}`)
            })

        });

    } catch (err) {

        console.log(`Failed to Run Rest with Error = ${err.message}`);
        mongoose.connection.close();
    }
}