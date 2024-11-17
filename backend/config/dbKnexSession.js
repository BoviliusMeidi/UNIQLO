const { EventEmitter } = require('events');
const knex = require('knex');
const db = require('./dbConfig');

class KnexSessionStore extends EventEmitter {
    constructor(options) {
        super();
        this.db = db;
        this.table = options.table || 'sessions';
        this.ttl = options.ttl || 86400;
    }

    async get(sid, callback) {
        try {
            const session = await this.db(this.table).where({ sid }).first();
            if (session) {
                callback(null, JSON.parse(session.data));
            } else {
                callback(null, null);
            }
        } catch (error) {
            callback(error);
        }
    }

    async set(sid, session, callback) {
        try {
            const ttl = this.ttl;
            const data = JSON.stringify(session);

            const existing = await this.db(this.table).where({ sid }).first();
            if (existing) {
                await this.db(this.table)
                    .where({ sid })
                    .update({ data, expires: new Date(Date.now() + ttl * 1000) });
            } else {
                await this.db(this.table)
                    .insert({ sid, data, expires: new Date(Date.now() + ttl * 1000) });
            }

            callback(null);
        } catch (error) {
            callback(error);
        }
    }

    async destroy(sid, callback) {
        try {
            await this.db(this.table).where({ sid }).del();
            callback(null);
        } catch (error) {
            callback(error);
        }
    }

    async length(callback) {
        try {
            const count = await this.db(this.table).count('* as count').first();
            callback(null, count.count);
        } catch (error) {
            callback(error);
        }
    }

    async clear(callback) {
        try {
            await this.db(this.table).del();
            callback(null);
        } catch (error) {
            callback(error);
        }
    }

    async touch(sid, session, callback) {
        try {
            const ttl = this.ttl;
            await this.db(this.table)
                .where({ sid })
                .update({ expires: new Date(Date.now() + ttl * 1000) });
            callback(null);
        } catch (error) {
            callback(error);
        }
    }
}

module.exports = KnexSessionStore;
