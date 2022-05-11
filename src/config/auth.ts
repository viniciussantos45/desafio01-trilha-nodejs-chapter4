import { config } from "dotenv";

// for get environment variables from .env
config();

export default {
  jwt: {
    secret: process.env.JWT_SECRET as string,
    expiresIn: '1d'
  }
}
