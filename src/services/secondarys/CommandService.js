class Command {
    constructor(client) {
        this.client = client;
        this.name = '';
    }

    getMember(member) {
        this.client.users.cache.get(member.id);  
    }
}

module.exports = Command;