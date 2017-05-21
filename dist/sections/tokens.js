"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Token Section
 * @param  {IonicAPI} api
 */
class TokensSection {
    constructor(api) {
        this.api = api;
        this.client = api.client;
    }
    list(options = {}) {
        return this.client.get('/push/tokens', options);
    }
    create(token_id, user_id) {
        let body = {
            token_id: token_id,
            user_id: user_id,
        };
        return this.client.post('/push/tokens', body);
    }
    retrieve(token_id) {
        return this.client.get('/push/tokens/' + token_id);
    }
    update(token_id, valid) {
        let body = {
            valid: valid,
        };
        return this.client.patch('/push/tokens/' + token_id, body);
    }
    delete(token_id) {
        return this.client.delete('/push/tokens/' + token_id);
    }
    listAssociatedUsers(token_id) {
        return this.client.get('/push/tokens/' + token_id + '/users');
    }
    associateUser(token_id, user_id) {
        return this.client.post('/push/tokens/' + token_id + '/users/' + user_id);
    }
    dissociateUser(token_id, user_id) {
        return this.client.delete('/push/tokens/' + token_id + '/users/' + user_id);
    }
}
exports.TokensSection = TokensSection;
