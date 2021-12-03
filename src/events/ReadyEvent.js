class ReadyEvent {
    constructor(client) {
        this.client = client;
        this.name = 'ready'
    }

    async run() {
        console.log('[Event] - Ready')
    }
}

module.exports = ReadyEvent;
