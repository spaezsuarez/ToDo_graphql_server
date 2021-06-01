import mongoose = require('mongoose');
import { connect } from 'mongoose';

mongoose.Promise = global.Promise;

export async function startDatabaseConnection(){
    await connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}