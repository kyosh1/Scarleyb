require('dotenv').config();

const Scarlet = require("./services/ScarletClient");

const client = new Scarlet({ intents: 767 });

client.login(process.env.TOKEN).then(() => {
    const pathCommand = './src/commands'
    const pathEvent = './src/events'

    client.loadCommands(pathCommand);
    client.loadEvents(pathEvent)
})