import { IonicAPI, Client } from '../index';

/**
 * Message Section
 * @param  {IonicAPI} api
 */
export class MessagesSection {
  client: Client
  constructor(private api:IonicAPI) {
    this.client = api.client;
  }

  retrieve(message_id:string):Promise<any> {
    return this.client.get('/push/messages/' + message_id);
  }

  delete(message_id:string):Promise<any> {
    return this.client.delete('/push/messages/' + message_id);
  }
}
