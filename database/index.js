const db = require("../config/index")
const mysql = require('mysql2/promise')

let connectionPool

// ChatRoom   Table
// +---------------------+
// Id | roomName
// +---------------------+

// Messages   Table
// +--------------------------+
// Id | userId | roomId | message | sentAt
// +--------------------------+

// AllUsers          Table
// +---------------------+
// Id | userName
// +---------------------+

// RoomMembers     Table
// +---------------------+
// Id | userId | roomId
// +---------------------+

const connection = () => {
  try {
    if (connectionPool !== undefined) {
      return connectionPool
    }
    connectionPool = mysql.createPool({
      host: db.host,
      user: db.user,
      password: db.password,
      database: db.name,
      port: db.port
    })
    return connectionPool
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export default connection()