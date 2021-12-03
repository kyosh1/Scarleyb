class MessageEvent {
    constructor(client) {
        this.client = client;

        this.name = 'messageCreate'
    }

    async run(message) {
         if(message.author.bot && !message.guild) return;

         const prefix = '.';
         if(!message.content.startsWith(prefix)) return;
         
         const args = message.content.slice(prefix.length).trim().split(/ +/g);
         const command = args.shift().toLowerCase()

         const cmd = this.client.commands.get(command);
         if(!cmd) return;

         cmd.run(message, args)
    }
}

module.exports = MessageEvent;
