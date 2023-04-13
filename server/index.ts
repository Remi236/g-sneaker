import App from './app';

function bootstrap() {
  const app = new App();
  console.log('App config: ', app.getConfig());
  app.listen();
}

bootstrap();
