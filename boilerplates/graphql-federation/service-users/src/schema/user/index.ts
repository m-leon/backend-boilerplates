import { User } from './user.model';

import { queryUser, UserWhereUniqueInput } from './user.queries';

export const userTypes = [User, queryUser, UserWhereUniqueInput];
