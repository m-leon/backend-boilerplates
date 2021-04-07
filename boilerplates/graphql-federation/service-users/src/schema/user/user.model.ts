import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.field('createdAt', {
      type: 'DateTime'
    });
    t.nonNull.field('updatedAt', {
      type: 'DateTime'
    });
    t.nonNull.string('username');
    t.nonNull.string('password');
  }
});
