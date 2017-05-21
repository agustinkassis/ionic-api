import { TokensSection, MessagesSection, NotificationsSection } from './sections';
import { Client } from './client';

/**
 * Ionic Api Client
 * https://docs.ionic.io/api/endpoints/push.html
 * @param  {Options} options Api Token and options
 */
export class IonicAPI {
  /**
   * Default Options
   * @access  private
   */
  private options: Options = {
    url: 'https://api.ionic.io/',
    apiToken: 'null',
  }

  /**
   * HTTP Client
   */
  client: Client;

  // Sections
  tokens: TokensSection
  messages: MessagesSection
  notifications: NotificationsSection

  constructor(options: Options) {
    Object.assign(this.options, options);
    this.client = new Client(this.options);
    this.loadSections();
  }

  /**
   * Load Multiple api sections
   * @access  private
   */
  private loadSections():void {
    this.tokens = new TokensSection(this);
    this.messages = new MessagesSection(this);
    this.notifications = new NotificationsSection(this);
  }
}

/**
 * Inits a new IonicAPI Client Object
 * @param  {Options}  options
 * @return {IonicAPI}
 */
export function init(options: Options):IonicAPI {
  return new IonicAPI(options);
}

/**
 * API Options
 * @type {object}
 */
export interface Options {
  url?: string,
  apiToken: string
}

/**
 * HTTP Client
 */
export { Client };
