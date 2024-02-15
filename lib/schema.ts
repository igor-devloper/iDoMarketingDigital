import z from 'zod'


export const ServiceSchema = z.object({
  serviceAds: z.string().nonempty('Escolha algum Serviço'),
  serviceCreate: z.string().nonempty('Escolha algum Serviço'),
  serviceSite: z.string().nonempty('Escolha algum Serviço'),
})

export const InfosSchema = z.object({
  name: z.string(),
  number: z.coerce.number(),
})