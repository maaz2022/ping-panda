import { j } from "./__internals/j"

/**
 * Middleware for providing a built-in cache with your Prisma database.
 *
 * You can remove this if you don't like it, but caching can massively speed up your database queries.
 */


export const baseProcedure = j.procedure
export const publicProcedure = baseProcedure
