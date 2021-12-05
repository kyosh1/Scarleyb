const mongoose = require("mongoose");

module.exports = {
  start() {
    try {
      mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });

      console.log(`[DataBase] - Conectado ao Banco de Dados.`);
    } catch (err) {
      if (err) return console.log(+err);
    }
  },
};
