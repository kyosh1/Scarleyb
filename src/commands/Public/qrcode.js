const {MessageEmbed} = require ('discord.js')
const Emojis = require ('../../utils/Emojis')
const CommandService = require('../../services/secondarys/CommandService')
const Axios = require ('axios');
const { default: axios } = require('axios');


class QRCommand extends CommandService {
    constructor(client) {
        super(client);
        this.client = client;
        this.name = 'qrcode';
        this.aliases = 'qr';
    }

    async run(message, args) {

       let Link;
       if (!args[1]) Link = "Uso de link para criação do QR-Code Obrigatorio";
       else Link = args.slice(1).join("");
    }
}
module.exports = QRCommand