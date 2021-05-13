import { GraphQLSchema } from 'graphql';
import { loadSchemaSync,GraphQLFileLoader,addResolversToSchema } from 'graphql-tools';
import { resolve } from 'path';
import { resolvers } from './resolvers';

const dataSchema:GraphQLSchema = loadSchemaSync(resolve('../src/config',__dirname, './schema.graphql'),{
    loaders:[new GraphQLFileLoader()]
});

export const finalSchema:GraphQLSchema = addResolversToSchema(
    dataSchema,resolvers
);