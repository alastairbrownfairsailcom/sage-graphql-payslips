// server.js
const path = require('path');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const dummyDocs = require("./dummy-docs.js");
const express = require('express');
const app = express();

// Construct a schema, using GraphQL schema language
const fs = require('fs');
const schemaDefinition = fs.readFileSync("server/doc-schema.graphql", "utf8");
const schema = buildSchema(schemaDefinition);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  doc: dummyDocs.getDoc
};

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/sage-graphql-payslips'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
/*
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '../dist/sage-graphql-payslips/index.html'));
});
*/

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4000);
