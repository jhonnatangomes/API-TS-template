import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

const list = '';
const list2 = [];
let a = 12;

import connectDatabase from './database';

const app = express();
app.use(cors());
app.use(express.json());

export async function init() {
    await connectDatabase();
}

export default app;
