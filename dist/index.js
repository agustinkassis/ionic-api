"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sections_1 = require("./sections");
const client_1 = require("./client");
exports.Client = client_1.Client;
/**
 * Ionic Api Client
 * https://docs.ionic.io/api/endpoints/push.html
 * @param  {Options} options Api Token and options
 */
class IonicAPI {
    constructor(options) {
        /**
         * Default Options
         * @access  private
         */
        this.options = {
            url: 'https://api.ionic.io/',
            apiToken: 'null',
        };
        Object.assign(this.options, options);
        this.client = new client_1.Client(this.options);
        this.loadSections();
    }
    /**
     * Load Multiple api sections
     * @access  private
     */
    loadSections() {
        this.tokens = new sections_1.TokensSection(this);
        this.messages = new sections_1.MessagesSection(this);
        this.notifications = new sections_1.NotificationsSection(this);
    }
}
exports.IonicAPI = IonicAPI;
/**
 * Inits a new IonicAPI Client Object
 * @param  {Options}  options
 * @return {IonicAPI}
 */
function init(options) {
    return new IonicAPI(options);
}
exports.init = init;
