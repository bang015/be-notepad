import dotenv from "dotenv";
dotenv.config();

const config = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWD,
    database: process.env.DB_DBNAME || "notepad",
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  },
  api: {
    prefix: '/api',
  },
  port: parseInt(process.env.PORT as string, 10),
  reqAddress: process.env.REQ_ADDRESS,
};

export default config;