import { APIGatewayProxyEvent } from 'aws-lambda';
import { SNS } from 'aws-sdk';

import { CreateOrder } from '../../../application-business-rules/use-cases/CreateOrder';
import { Order } from '../../../enterprise-business-rules/entities/Order';
import { CreateOrderController } from '../../../interface-adapters/controllers/CreateOrderController';
import { internalServerError } from '../../../interface-adapters/util/HttpResponseParser';
import { SnsNotificationClient } from '../../adapters/notification/SnsNotificationClient';
import { CreateOrderData } from '../../repositories/order/CreateOrderData';
import { adaptToServerlessResponse } from '../adapter/serverlerss';

export const createOrder = async (event: APIGatewayProxyEvent) => {
  try {
    const sns = new SNS();
    const snsClient = new SnsNotificationClient(
      sns,
      process.env.ORDER_TOPIC_URL || ''
    );
    const publishOrderRepository = new CreateOrderData(snsClient);
    const useCase = new CreateOrder(publishOrderRepository);
    const controller = new CreateOrderController(useCase);

    const body: Order = JSON.parse(event.body || '');
    const path = event.pathParameters;
    const result = await controller.exec({ params: { ...body, ...path } });

    return adaptToServerlessResponse(result);
  } catch (error) {
    console.error('Error adapting route', error);
    return adaptToServerlessResponse(internalServerError([error as Error]));
  }
};
