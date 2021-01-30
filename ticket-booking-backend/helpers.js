const db = require("./dbConnection");
const objectId = require("objectid");
module.exports = {
    setTickets: (ticketCount) => {
        return new Promise((resolve, reject) => {
            var countId = "6014dfb0cf91080fdc83f5bf";
            db.get()
                .collection("tickets")
                .updateOne(
                    { _id: objectId(countId) },
                    { $set: { ticketCount: ticketCount } }
                )
                .then((response) => {
                    resolve(response);
                    // console.log(response.ops[0]);
                });
        });
    },
    getTicketCount: () => {
        return new Promise((resolve, reject) => {
            db.get()
                .collection("tickets")
                .findOne({ _id: objectId("6014dfb0cf91080fdc83f5bf") })
                .then((response) => {
                    resolve(response);
                });
        });
    },
    allocateTickets: (count) => {
        return new Promise((resolve, reject) => {
            // console.log(obj);
            db.get()
                .collection("tickets")
                .updateOne(
                    { _id: objectId("6014dfb0cf91080fdc83f5bf") },
                    { $inc: { ticketCount: -count } }
                )
                .then((response) => {
                    resolve(response);
                });
        });
    },
    deallocateTickets: (count) => {
        return new Promise((resolve, reject) => {
            db.get()
                .collection("tickets")
                .updateOne(
                    { _id: objectId("6014dfb0cf91080fdc83f5bf") },
                    { $inc: { ticketCount: +count } }
                )
                .then(() => {
                    resolve(count);
                });
        });
    },
};
