import mysql from "mysql2/promise";

export class Database {
  private static instance: mysql.Pool | null = null;

  private constructor() {}

  public static async getConnection(): Promise<mysql.Pool> {
    if (!Database.instance) {
      Database.instance = mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "my_bread_db",
        waitForConnections: true,
        connectionLimit: 10, // Efisien untuk antrean query data produk
        queueLimit: 0,
      });
    }
    return Database.instance;
  }
}
