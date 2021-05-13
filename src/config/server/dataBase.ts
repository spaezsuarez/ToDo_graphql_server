import { connect } from 'mongoose';

export function startDatabaseConnection(){
    connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Base de datos conectada');
    }).catch((error) => {
        console.log(error);
    });
}