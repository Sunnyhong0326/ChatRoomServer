class AllUserGroupChat {
    static async createUser (conn, args) {
        try {
            console.log(args.userName)
            const query = `
                Insert into AllUsers (userName) values('${args.userName}');
            `
            const [rows, fields] = await conn.execute(query)

            return `Create user sucessfully`
        } catch (err) {
            console.error(`[ERROR] AllUserGroupChat.createUser() :\n ${err}`)
        }
    }

    static async createRoom (conn, args) {
        try {
          const query = `
            Insert Into ChatRoom (roomName) values('${args.roomName}');
        `
          const [rows, fields] = await conn.execute(query)
    
          return `create Chat Room ${args.roomName} success!`
        } catch (err) {
          console.error(`[ERROR] AllUserGroupChat.createRoom() :\n ${err}`)
        }
      }

    static async addMemberToRoom(conn, args) {
        try {
            const query = `
                Insert into RoomMembers(userId, roomId) values (${args.userId}, '${args.roomId}')
            `
            const [rows, fields] = await conn.execute(query)
            
            return `Add User${args.userId} to Room${args.roomId} successfully`
        } catch (err) {
            console.error(`[ERROR] AllUserGroupChat.addMembersToGroup() :\n ${err}`)
        }
    }

    static async sendMessage(conn, args) {
        try {
            const query = `
                Insert into Messages(userId, roomId, message) values(${args.userId}, ${args.roomId}, '${args.text}');
            `
            const [rows, fields] = await conn.execute(query)
    
            return `Send message: ${args.text} successfully!`
        } catch (err) {
            console.error(`[ERROR] AllUserGroupChat.sendMessage() :\n ${err}`)
        }
    }

    static async getChatRoomMessages(conn, args) {
        try {
            const query = `
                Select message From Messages Where roomId = ${args.roomId}  Order by sentAt Asc;
            `
            const [rows, fields] = await conn.execute(query)
        
            return rows
        }catch (err) {
            console.error(`[ERROR] AllUserGroupChat.getChatRoomMessages() :\n ${err}`)
        }
    }
}
module.exports = AllUserGroupChat