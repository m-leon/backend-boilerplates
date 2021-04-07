import { arg, inputObjectType, nonNull, queryField } from 'nexus';

import { User } from './user.model';

export const UserWhereUniqueInput = inputObjectType({
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id');
  }
});

export const queryUser = queryField('user', {
  type: nonNull(User),
  args: {
    where: arg({ type: nonNull(UserWhereUniqueInput) })
  },
  resolve(_, args, { prisma }) {
    return prisma.user.findUnique(args);
  }
});
