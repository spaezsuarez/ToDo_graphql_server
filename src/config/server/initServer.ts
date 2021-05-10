import express = require('express');
import cors = require('cors');
import { config } from 'dotenv'
import { resolve } from 'path';
import { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { finalSchema } from '../graphql/schemaConfig';
import { startDatabaseConnection } from './dataBase';

export const initServer = async () => {

    await config({path:resolve('.env')});
    startDatabaseConnection();

    const grahqlServer = graphqlHTTP({
        schema:finalSchema,
        graphiql:true
    });

    const server:Application = express();

    server.use('*',cors());

    server.use('/',grahqlServer);

    server.listen(process.env.PORT,() => {
        console.log(`server running in http://localhost:${process.env.PORT}/`);
    });

}