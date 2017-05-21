import { IonicAPI, Client } from '../index';

/**
 * Token Section
 * @param  {IonicAPI} api
 */
export class TokensSection {
  client: Client
  constructor(private api:IonicAPI) {
    this.client = api.client;
  }

  list(options:object={}):Promise<any> {
    return this.client.get('/push/tokens', options);
  }

  create(token_id?:string, user_id?:string):Promise<any> {
    let body = {
      token_id: token_id,
      user_id: user_id,
    };
    return this.client.post('/push/tokens', body);
  }

  retrieve(token_id:string):Promise<any> {
    return this.client.get('/push/tokens/' + token_id);
  }

  update(token_id:string, valid:boolean):Promise<any> {
    let body = {
      valid: valid,
    };
    return this.client.patch('/push/tokens/' + token_id, body);
  }

  delete(token_id:string):Promise<any> {
    return this.client.delete('/push/tokens/' + token_id);
  }

  listAssociatedUsers(token_id:string):Promise<any> {
    return this.client.get('/push/tokens/' + token_id + '/users');
  }

  associateUser(token_id:string, user_id:string):Promise<any> {
    return this.client.post('/push/tokens/' + token_id + '/users/' + user_id);
  }

  dissociateUser(token_id:string, user_id:string):Promise<any> {
    return this.client.delete('/push/tokens/' + token_id + '/users/' + user_id);
  }

}
