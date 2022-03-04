import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { FeedModule } from './modules/feed/feed.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/' + process.env.DATABASE,
      {
        connectionFactory: (connection) => {
          connection.on('connected', () => {
            console.log('mongo is connected');
          });
          connection.on('disconnected', () => {
            console.log('DB disconnected');
          });
          connection.on('error', (error) => {
            console.log('DB connection failed! for error: ', error);
          });
          return connection;
        },
      },
    ),
    FeedModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
