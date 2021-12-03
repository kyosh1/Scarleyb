class ReadyEvent {
    constructor(client) {
        this.client = client;

        this.name = 'ready'
    }

    async run() {
        console.log('testing')
    }
}

module.exports = ReadyEvent;
