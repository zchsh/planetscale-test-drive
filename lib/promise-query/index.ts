import "dotenv/config";
import mysql from "mysql2";

const DB_URL = process.env.DB_URL;

type QueryResult =
  | mysql.RowDataPacket[]
  | mysql.RowDataPacket[][]
  | mysql.OkPacket
  | mysql.OkPacket[]
  | mysql.ResultSetHeader;

export default function promiseQuery(sqlQuery: string): Promise<QueryResult> {
  const connection = mysql.createConnection(DB_URL);
  return new Promise((resolve, reject) => {
    connection.connect();
    connection.query(sqlQuery, function (error, results) {
      if (error) reject(error);
      resolve(results);
    });
    connection.end();
  });
}
