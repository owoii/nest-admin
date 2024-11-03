import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { type INestApplication } from '@nestjs/common';

export function setupSwagger(
    app: INestApplication,
    // configService: ConfigService<ConfigKeyPaths>,
): void {
    const config = new DocumentBuilder()
        .setTitle('Nest Admin')
        .setDescription('Nest Admin API Document')
        .setVersion('0.0.1')
        .build()
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory)
}
