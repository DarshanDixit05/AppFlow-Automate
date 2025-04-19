import { z } from "zod";

export const ZapCreateShema = z.object({
    triggerId: z.string(),
    actions: z.array(z.object({
        actionId: z.string()
    }))
})