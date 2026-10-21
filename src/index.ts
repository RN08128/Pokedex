import fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const app = fastify();

const port = Number(process.env.PORT);
app.listen({port}, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on address: ${address} and port: ${port}`);
});