import { SQSEvent, SQSRecord } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { ProcessOrder } from '../../../application-business-rules/use-cases/ProcessOrder';
import { Order } from '../../../enterprise-business-rules/entities/Order';
import { ProcessOrderController } from '../../../interface-adapters/controllers/ProcessOrderController';
import { internalServerError } from '../../../interface-adapters/util/HttpResponseParser';
import { DynamoDatabaseClient } from '../../adapters/database/DynamoDatabaseClient';
import { ProcessOrderData } from '../../repositories/order/ProcessOrderData';
import { adaptToServerlessResponse } from '../adapter/serverlerss';

export const processOrder = async (event: SQSEvent) => {
  try {
    const dynamoClient = new DynamoDB();
    const databaseClient = new DynamoDatabaseClient(
      dynamoClient,
      process.env.ORDER_TABLE || ''
    );
    const processOrderRepository = new ProcessOrderData(databaseClient);
    const useCase = new ProcessOrder(processOrderRepository);
    const controller = new ProcessOrderController(useCase);

    const messages: string[] = event.Records.map(
      (record: SQSRecord) => record.body
    );
    const promises = messages.map((message: string) =>
      (async () => {
        const body: Order = JSON.parse(message || '');
        const result = await controller.exec({ params: body });

        if (result.status > 299 || result.status < 200) {
          console.error('error processing message', JSON.stringify(result));
          throw new Error('error processing message');
        }

        return adaptToServerlessResponse(result);
      })()
    );
    const result = await Promise.all(promises);
    return result;
  } catch (error) {
    console.error('Error adapting route', error);
    return adaptToServerlessResponse(internalServerError([error as Error]));
  }
};
