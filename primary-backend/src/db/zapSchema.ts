import { z } from "zod";

export const ZapCreateShema = z.object({
    triggerId: z.string(),
    action: z.array(z.object({
        actionId: z.string()
    }))
})