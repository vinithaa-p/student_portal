// create_db.js
const sqlite3 = require('sqlite3').verbose();

// Connect to the database (create if not exists)
let db = new sqlite3.Database('./database/admin.db');

// Create admin table with dummy data
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  )`);

  // Insert dummy data (admin user)
  db.run(`INSERT INTO admin (username, password) VALUES (?, ?)`, ['admin', 'admin123']);
});

db.close();
console.log("Database created and dummy data inserted.");
