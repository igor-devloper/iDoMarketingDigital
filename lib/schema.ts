import z from 'zod'


export const ServiceSchema = z.object({
  serviceAds: z.string().nonempty('Escolha algum Serviço'),
  serviceCreate: z.string().nonempty('Escolha algum Serviço'),
  serviceSite: z.string().nonempty('Escolha algum Serviço'),
  infos: z.array(z.object({
    name: z.string().nonempty('O nome é obrigatorio'),
    number: z.number()
    .max(11, 'Maximo de caracteres atingido'),
  }))
})

