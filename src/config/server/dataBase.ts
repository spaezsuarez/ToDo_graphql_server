import { connect } from 'mongoose';

export async function startDatabaseConnection(){
    await connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}