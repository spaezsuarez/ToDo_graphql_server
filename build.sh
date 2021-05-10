#!/bin/bash

rm -rf dist

yarn compile

#clear

cp src/config/graphql/schema.graphql dist/config/graphql

yarn start