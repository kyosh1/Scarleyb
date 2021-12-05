const {MessageEmbed} = require ('discord.js')
const Emojis = require ('../../utils/Emojis')
const CommandService = require('../../services/secondarys/CommandService')


class PingCommand extends CommandService {
    constructor(client) {
        super(client);
        this.client = client;
        this.name = 'ping';
        this.aliases = 'p';
    }

    async run(message, args) {
        const PingEmbed = new MessageEmbed()
        .setColor(process.env.EMBEDCOLOR)
        .setTitle(`${Emojis.Ping} Ping`)
        .setDescription(`Gateway : \`${this.client.ws.ping}ms\``);

        message.reply({embeds : [PingEmbed]})
    }
}

module.exports = PingCommand