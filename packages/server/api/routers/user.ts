import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { users } from "@/server/db/schemas/user"


export const userRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({ name: z.string().min(1) }))
        .mutation(async ({ctx, input}) => {
            await ctx.db.insert(users).values({
                name: input.name,
            })
        })
})
