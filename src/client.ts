import * as restify from 'restify';
import * as queryString from 'query-string';
import { Options } from './index';

export class Client {
  http: any;
  constructor(public options: Options) {
    this.http = restify.createJsonClient({
      name: 'IonicClient',
      type: 'json',
      url: this.options.url,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.options.apiToken
      },
      userAgent: 'node-ionic-api'
    });
  }

  /**
   * GET Request
   * @param  {String}       url   URL path
   * @param  {object={}}    query Query params
   * @return {Promise<any>}       Response Data
   */
  get(url:String, query:object={}):Promise<any> {
    url += '?' + queryString.stringify(query);
    return new Promise((resolve, reject) => {
      this.http.get(url, (err, req, res, obj) => {
        if (err) {
          return reject(new Error(err));
        }
        resolve(obj);
      });
    });
  }

  /**
   * POST
   * @param  {String}       url     Url Path
   * @param  {object={}}    payload Payload Body
   * @return {Promise<any>}         Response Data
   */
  post(url:String, payload: object={}):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(url, payload, (err, req, res, obj) => {
        if (err) {
          return reject(new Error(err));
        }
        resolve(obj);
      });
    });
  }

  /**
   * PUT Request
   * @param  {String}       url   Url path
   * @param  {object={}}    query Query params
   * @return {Promise<any>}       Response Data
   */
  put(url:String, query: object={}):Promise<any> {
    url += queryString.stringify(query);
    return new Promise((resolve, reject) => {
      this.http.put(url, (err, req, res, obj) => {
        if (err) {
          return reject(new Error(err));
        }
        resolve(obj);
      });
    });
  }

  /**
   * PATCH Request
   * @param  {String}       url     Url Path
   * @param  {object={}}    payload Payload Body
   * @return {Promise<any>}         Response Data
   */
  patch(url:String, payload: object={}):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.patch(url, payload, (err, req, res, obj) => {
        if (err) {
          return reject(new Error(err));
        }
        resolve(obj);
      });
    });
  }

  /**
   * DELETE Request
   * @param  {String}       url   Url Path
   * @param  {object={}}    query Query Params
   * @return {Promise<any>}       Response Data
   */
  delete(url:String, query: object={}):Promise<any> {
    url += '?' + queryString.stringify(query);
    return new Promise((resolve, reject) => {
      this.http.delete(url, (err, req, res, obj) => {
        if (err) {
          return reject(new Error(err));
        }
        resolve(obj);
      });
    });
  }
}
