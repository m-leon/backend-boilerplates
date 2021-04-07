import { PrismaClient } from '@examples/db-public';

export type Context = ReturnType<typeof configureContext>;

const prisma = new PrismaClient({
  rejectOnNotFound: true
});

export const configureContext = () => ({
  prisma
});
