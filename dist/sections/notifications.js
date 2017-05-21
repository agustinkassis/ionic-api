"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Notifications Section
 * @param  {IonicAPI} api
 */
class NotificationsSection {
    constructor(api) {
        this.api = api;
        this.client = api.client;
    }
    list(options = {}) {
        return this.client.get('/push/notifications', options);
    }
    create(notification, target, profile) {
        let body = Object.assign({
            notification: notification,
            profile: profile
        }, target);
        return this.client.post('/push/notifications', body);
    }
    retrieve(notification_id, fields = []) {
        let query = {
            fields: fields
        };
        return this.client.get('/push/notifications/' + notification_id, query);
    }
    replace(notification_id, body) {
        return this.client.put('/push/notifications/' + notification_id, body);
    }
    delete(notification_id) {
        return this.client.delete('/push/notifications/' + notification_id);
    }
    listMessages(notification_id, options = {}) {
        return this.client.get('/push/notifications/' + notification_id + '/messages', options);
    }
}
exports.NotificationsSection = NotificationsSection;
