const fs = require('fs');

const { Client, Collection } = require('discord.js');

class ScarleyClient extends Client {
    constructor(options) {
        super(options)

        this.commands = new Collection();
    }

    loadCommands(path) {
      fs.readdirSync(path).forEach(file => {
        const pathCommand = '../commands'
        const command = new (require(`${pathCommand}/${file}`))(this);
       
        this.commands.set(command.name, command);
      });
    };

    loadEvents(path) {
      fs.readdirSync(path).forEach(file => {
      const pathEvent = '../events'

      const event = new (require(`${pathEvent}/${file}`))(this);
     
      super.on(event.name, (...args) => event.run(...args));
     });
  }

    login(token = process.env.TOKEN) {
        return super.login(token);
    };
}

module.exports = ScarleyClient