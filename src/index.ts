import fastify from "fastify";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = fastify();
// After configuring first routes and connecting to the frontend, consider testing the API and funcionality of requisitions without the fastify/cors package, and then add it if necessary. This will help to avoid unnecessary complexity in the project.

// first route to test the server
app.get("/", async (request, reply) => {
  return { message: "Hello, World!" };
});


// Start the server
const port = Number(process.env.PORT);
app.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on address: ${address}`);
});
