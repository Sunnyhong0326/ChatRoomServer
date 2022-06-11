class AllUserGroupChat {

    static async createUser (conn, args) {
        try {
            console.log(args.userName)
            const query = `
                Insert into AllUsers (userName) values('${args.userName}');
            `
            const [rows, fields] = await conn.execute(query)
            console.log(rows)

            return rows.insertId
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
            console.log(rows)
            console.log(rows.insertId)
            return rows.insertId
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
            
            return rows
        } catch (err) {
            console.error(`[ERROR] AllUserGroupChat.sendMessage() :\n ${err}`)
        }
    }

    static async addFriend(conn, userId, friendId) {
        try {
            const query = `
                Insert into Friend(userId, friendId) values(${userId}, ${friendId});
            `
            const [rows, fields] = await conn.execute(query)
            
            return 'Add Friend Successfully'
        } catch (err) {
            console.error(`[ERROR] AllUserGroupChat.addFriend() :\n ${err}`)
        }
    }
    
    static async getChatRoomMessages(conn, args) {
        try {
            const query = `
                Select * From Messages Where roomId = ${args.roomId}  Order by sentAt Asc;
            `
            const [rows, fields] = await conn.execute(query)
        
            return rows
        }catch (err) {
            console.error(`[ERROR] AllUserGroupChat.getChatRoomMessages() :\n ${err}`)
        }
    }

    static async getUserChatRoom(conn, args) {
        try {
            const query = `
                Select roomId From RoomMembers Where userId = ${args.userId};
            `
            const [rows, fields] = await conn.execute(query)

            return rows
            
        }catch (err) {
            console.error(`[ERROR] AllUserGroupChat.getUserChatRoom() :\n ${err}`)
        }
    }
    static async getChatRoomName(conn, args){
        const query = `
            Select roomName From ChatRoom Where Id = ${args.roomId};
        `
        const [rows, fields] = await conn.execute(query)
        console.log(rows)
        
        return rows[0].roomName
    }
    static async getUserById(conn, args) {
        try {
            const query = `
                Select * From AllUsers Where Id = ${args.userId};
            `
            const [rows, fields] = await conn.execute(query)
            
            console.log(rows)
            return rows
        }catch (err) {
            console.error(`[ERROR] AllUserGroupChat.getUserChatRoom() :\n ${err}`)
        }
    }

    static async getUserByName(conn, args) {
        try {
            const query = `
                Select * From allUsers Where userName = '${args.userName}';
            `
            const [rows, fields] = await conn.execute(query)
            
            console.log(rows)
            return rows
        }catch (err) {
            console.error(`[ERROR] AllUserGroupChat.getUserByName() :\n ${err}`)
        }
    }

    static async getTask(conn, args) {
        try {
            const query = `
                Select * From Tasks Where Id = ${args.Id};
            `
            const [rows, fields] = await conn.execute(query)
            
            console.log(rows)
            return rows[0]
        }catch (err) {
            console.error(`[ERROR] AllUserGroupChat.getUserByName() :\n ${err}`)
        }
    }
    
    static async getInitialTasks(conn, args) {
        try {
            const query = `
                SELECT TOP ${args.number} * FROM Tasks;
            `
            const [rows, fields] = await conn.execute(query)
            
            console.log(rows)
            return rows
        }catch (err) {
            console.error(`[ERROR] AllUserGroupChat.getUserByName() :\n ${err}`)
        }
    }

    static async getAllFriends(conn, args) {
        try {
            const query1 = `
                SELECT friendId FROM Friends Where userId = ${args.userId};
            `
            const [rows, fields] = await conn.execute(query1)
            
            console.log(rows)
            return rows
        }catch (err) {
            console.error(`[ERROR] AllUserGroupChat.getUserByName() :\n ${err}`)
        }
    }

}
module.exports = AllUserGroupChat