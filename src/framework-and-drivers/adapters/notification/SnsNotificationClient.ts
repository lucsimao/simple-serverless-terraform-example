import { SNS } from 'aws-sdk';

import { NotificationClient } from '../../repositories/order/CreateOrderData';

export class SnsNotificationClient implements NotificationClient {
  constructor(
    private readonly snsClient: SNS,
    private readonly topicURL: string
  ) {}

  public async publish<T>(message: T): Promise<void> {
    const messageData = {
      Message: JSON.stringify(message),
      TopicArn: this.topicURL,
    };
    await this.snsClient.publish(messageData).promise();
  }
}
