import z, { string } from 'zod'


export const ServiceSchema = z.object({
  servicesAds:z.array(z.string())
    .refine((value) => value.some((item) => item), {
      message: '✖',
    }),

  servicesCreate: z.array(z.string().transform(String)).refine((value) => value.some((item) => item),{
    message: "Você deve selecionar pelo menos um item",
  }),

  servicesSite: z.array(z.string())
    .refine((value) => value.some((item) => item), {
      message: '✖',
    })
})

export const InfosSchema = z.object({
  name: z.string(),
  number: z.coerce.number(),
})