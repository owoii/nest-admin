import * as z from 'zod'

export const isUser = z.object({
    name: z.string()
})