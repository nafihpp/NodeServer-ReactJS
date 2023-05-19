const fs = require("fs");
const { createServer } = require("http");
const bodyParser = require("body-parser");

let userList = [
    {
        userName: "AMal",
    },
    {
        userName: "Nafih",
    },
    {
        userName: "Debug media",
    },
];

const jsonParser = bodyParser.json();

const server = createServer((req, res) => {
    switch (req.url) {
        case "/": {
            if (req.method === "GET") {
                fs.readFile("index.html", (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(data);
                });
                break;
            }
            if (req.method === "POST") {
                try {
                    const data = JSON.parse(req.body);
                    console.log(data);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        case "/users": {
        }
    }
});
server.use(jsonParser);
server.listen(4000, () => {
    console.log("listening to port");
});
