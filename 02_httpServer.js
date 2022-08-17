//HTTP Server
const http = require("http");

// Create a local server to receive data from

const server = http.createServer();

//Status code: 200

// {
//     data: 'Hello World!'
//   }
server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  //   console.log(JSON.parse({
  //     data: 'Hello World!'
  //   }))
  const helloWorld = JSON.stringify({
    data: "Hello World!!",
  });
  console.log(req.method);
  //CRUD - CREATE READ UPDATE AND DELETE
  //GET - READ
  //POST
  //Depending on the route, we want to send different information
  if (req.url === "/hello") {
    res.end("hello");
  }
  //Data needs to be sent in a string via client and webservers
  if (req.url === "/") {
    res.end(helloWorld);
  }
});

server.listen(8000, () => {
  console.log("I am listening");
});

//Request:
//Response:
