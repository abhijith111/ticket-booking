const mongoClient = require("mongodb").MongoClient;
const state = {
  db: null,
};
module.exports.connect = (done) => {
  const url = "mongodb+srv://adminAbhijith:oqHXYcznxGACtPSC@cluster0.bpv2s.mongodb.net/<dbname>?retryWrites=true&w=majority";
  const dbname = "ticket-booking-db";

  mongoClient.connect(url, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbname);
    done();
  });
};

module.exports.get = () => {
  return state.db;
};

