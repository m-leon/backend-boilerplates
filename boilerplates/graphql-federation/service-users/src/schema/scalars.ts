import { GraphQLDateTime } from 'graphql-scalars';
import { scalarType } from 'nexus';

export const scalarTypes = [scalarType(GraphQLDateTime)];
