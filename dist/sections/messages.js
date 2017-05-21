"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Message Section
 * @param  {IonicAPI} api
 */
class MessagesSection {
    constructor(api) {
        this.api = api;
        this.client = api.client;
    }
    retrieve(message_id) {
        return this.client.get('/push/messages/' + message_id);
    }
    delete(message_id) {
        return this.client.delete('/push/messages/' + message_id);
    }
}
exports.MessagesSection = MessagesSection;
