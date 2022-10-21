import { Pool } from "pg";
import dotenv from 'dotenv'

dotenv.config()

const {
  HOST,
  DB,
  DB_TEST,
  USER,
  PASSWORD,
  ENV
} = process.env

let client:Pool = new Pool()

if( ENV == 'test' ){
  client = new Pool({
    host: HOST,
    database: DB_TEST,
    user: USER,
    password: PASSWORD
  })
}

if( ENV == 'dev' ){
  client = new Pool({
    host: HOST,
    database: DB,
    user: USER,
    password: PASSWORD
  })
}

export default client