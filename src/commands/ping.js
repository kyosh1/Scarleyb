const CommandService = require('../services/secondarys/CommandService')

class PingCommand extends CommandService {
    constructor(client) {
        super(client);
        this.client = client;

        this.name = 'ping';
    }

    async run(message, args) {
        message.reply(`Ping do bot: \`${this.client.ws.ping}ms\``);
    }
}

module.exports = PingCommand