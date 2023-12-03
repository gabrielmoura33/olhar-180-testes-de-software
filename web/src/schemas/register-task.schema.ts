import * as z from 'zod'
const schema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3).max(50),
  date: z.string().min(3).max(50),
  priority: z.string().min(3).max(50),
})

export default schema
