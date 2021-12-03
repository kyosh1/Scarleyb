class ReadyEvent {
    constructor(client) {
        this.client = client;
        this.name = 'ready'
    }

    async run() {
        const presence = [
            { name : "Scarley - Em desenvolvimento ...", },
            { name : "Precisa de ajuda ? Mencione-me !", },
          ]; 
          setInterval(() => {
            var randomPresence = presence[Math.floor(Math.random() * presence.length)];
            this.client.user.setActivity(randomPresence.name);
          }, 15 * 1000);

        console.log('[Event] - Ready')
    }
}

module.exports = ReadyEvent;