require('dotenv').config();

const Scarlet = require("./services/ScarletClient");

const client = new Scarlet({ intents: 767 });

client.login(process.env.TOKEN).then(() => {
    const pathCommand = './src/commands'
    const subpathCommand = './commands'
    const pathEvent = './src/events'

    client.loadCommands(pathCommand, subpathCommand);
    client.loadEvents(pathEvent)
})