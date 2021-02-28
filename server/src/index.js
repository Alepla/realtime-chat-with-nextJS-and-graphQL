const { Prisma } = require("prisma-binding");
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: (req) => ({
    ...req,
    prisma: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "http://localhost:4466",
    }),
  }),
});

server.start(() => console.log("Server is running on http://localhost:4000"));
