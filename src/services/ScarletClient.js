const fs = require('fs');
const { Client, Collection } = require('discord.js');

class ScarleyClient extends Client {
  constructor(options) {
    super(options)

    this.commands = new Collection();
    this.commands.aliases = new Collection();
  }

  loadCommands(path) {
    fs.readdirSync(path).forEach(dir => {
      const pathCommand = `./src/commands/${dir}`
      const commands = fs.readdirSync(pathCommand).filter(a => a.endsWith('.js'));

      for (let file of commands) {
        const command = new (require(`../commands/${dir}/${file}`))(this);

        this.commands.set(command.name, command);

        if (command.aliases && Array.isArray(command.aliases)) {
          command.aliases.forEach(aliases => this.commands.aliases.set(aliases));
        }
      }
    });
  };

  loadEvents(path) {
    fs.readdirSync(path).forEach(file => {
      const pathEvent = '../events'

      const event = new (require(`${pathEvent}/${file}`))(this);

      super.on(event.name, (...args) => event.run(...args));
    });
  }

  getMember(member) {
    return this.users.cache.get(member.id);
  }

  login(token = process.env.TOKEN) {
    return super.login(token);
  };
}

module.exports = ScarleyClient