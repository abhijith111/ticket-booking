const express = require("express");
const db = require("./dbConnection.js");
const helpers = require("./helpers");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
db.connect((err) => {
    if (err) console.log("Database Connection Error");
    else console.log("Database Connected Atlas MongoDB");
});

app.post("/admin", (req, res) => {
    helpers.setTickets(10).then((response) => {
        res.send("ticket count updated to 10");
    });
});

app.get("/", (req, res) => {
    helpers.getTicketCount().then((response) => {
        res.json(response);
    });
});
app.post("/allocate:id", (req, res) => {
    var requestedCount = req.params.id
    helpers.allocateTickets(requestedCount).then((response) => {
        res.json(response);
    });
});
app.post('/deallocate:id',(req,res) => {
    var requestedCount = req.params.id;
    helpers.deallocateTickets(requestedCount).then((response) => {
        res.json(response)
    })
})

app.listen(PORT, () => {
    console.log("server started at port: ", PORT);
});

//oqHXYcznxGACtPSC
