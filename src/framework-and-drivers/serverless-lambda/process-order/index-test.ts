import { SQSEvent, SQSRecord } from 'aws-lambda';

export interface Order {
  product: string;
  quantity: number;
}

export const receiveOrder = async (event: SQSEvent) => {
  const messages = event.Records.map((record: SQSRecord) => record.body);

  try {
    console.info('PUBLISHED MESSAGE TO SNS:', messages);
    return {
      statusCode: 200,
      body: `Success publishing message to sns: ${JSON.stringify(messages)}`,
    };
  } catch (error) {
    console.error('error publishing message', error);
    return {
      statusCode: 500,
      error: (error as Error).message,
    };
  }
};
