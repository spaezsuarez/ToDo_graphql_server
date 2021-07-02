import express = require('express');
import cors = require('cors');
import { Application,Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { finalSchema } from '../graphql/schemaConfig';

export const initServer = ():void => {

    const grahqlServer = graphqlHTTP({
        schema:finalSchema,
        graphiql:true
    });

    const server:Application = express();

    server.use((_, res:Response, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
        );
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, PATCH, OPTIONS'
        );
        next();
    });

    server.use(cors());
    server.use(express.json());
    server.use('/graphql',grahqlServer);

    server.listen(process.env.PORT,() => {
        console.log(`server running in http://${process.env.HOST}:${process.env.PORT}/graphql`);
    });

}