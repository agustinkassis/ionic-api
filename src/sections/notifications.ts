import { IonicAPI, Client } from '../index';

/**
 * Notifications Section
 * @param  {IonicAPI} api
 */
export class NotificationsSection {
  client: Client
  constructor(private api:IonicAPI) {
    this.client = api.client;
  }

  list(options:object={}):Promise<any> {
    return this.client.get('/push/notifications', options);
  }

  create(notification:Notification, target: object, profile:string):Promise<any> {
    let body = Object.assign({
      notification: notification,
      profile: profile
    }, target);

    return this.client.post('/push/notifications', body);
  }

  retrieve(notification_id:string, fields:string[]=[]):Promise<any> {
    let query = {
      fields: fields
    };
    return this.client.get('/push/notifications/' + notification_id, query);
  }

  replace(notification_id:string, body:object):Promise<any> {
    return this.client.put('/push/notifications/' + notification_id, body);
  }

  delete(notification_id:string):Promise<any> {
    return this.client.delete('/push/notifications/' + notification_id);
  }

  listMessages(notification_id:string, options:object={}):Promise<any> {
    return this.client.get('/push/notifications/' + notification_id + '/messages', options);
  }
}

export interface Notification {
  app_id?: string,
  config?: {
    android?: any,
    ios?: any,
    message: string,
    payload?: object,
    title: string
  },
  created?: string,
  overview?: {
    errors?: {
      count: number,
      reason: string
    },
    invalid?: number,
    sent?: number
  },
  state?: 'pending' | 'schedules' | 'failed' | 'enqueued',
  status?: 'open' | 'locked'

}
