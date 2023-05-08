//depende de lib
import { HttpRequest, SNS } from 'aws-sdk';

//define model
export interface Order {
  product: string;
  quantity: number;
}

export const createOrder = async (event: HttpRequest) => {
  try {
    //instancia o sns
    const topicClient = new SNS();
    const messageData = {
      Message: JSON.stringify(event.body),
      TopicArn: process.env.ORDER_TOPIC_URL,
    };

    //publica mensagem na fila
    await topicClient.publish(messageData).promise();
    console.info('PUBLISHED MESSAGE TO SNS:', messageData);
    //cria o payload de retorno
    return {
      statusCode: 200,
      body: `Success publishing message to sns: ${JSON.stringify(messageData)}`,
    };
  } catch (error) {
    //trata erro
    console.error('error publishing message', error);
    //cria payload de retorno
    return {
      statusCode: 500,
      error: (error as Error).message,
    };
  }
};
