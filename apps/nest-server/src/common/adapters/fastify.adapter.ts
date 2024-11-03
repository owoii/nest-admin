// import FastifyCookie from '@fastify/cookie'
// import FastifyMultipart from '@fastify/multipart'
import { FastifyAdapter } from '@nestjs/platform-fastify'

const app = new FastifyAdapter({
    logger: false
})
export { app as fastifyApp }