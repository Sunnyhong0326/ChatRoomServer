const AllUserGroupChat = require('./model/GroupChat')
import connectPool from './database'

const resolvers = {
    Query: {
        getChatRoomMessages: async (_, args) => {
            return await AllUserGroupChat.getChatRoomMessages(connectPool, args)
        },
    },
    Mutation: {
        createUser: async (_, args) => {
            return await AllUserGroupChat.createUser(connectPool, args)
        },
        addMemberToRoom: async (_, args) => {
            return await AllUserGroupChat.addMemberToRoom(connectPool, args)
        },
        createRoom: async (_, args) => {
            return await AllUserGroupChat.createRoom(connectPool, args)
        },
        sendMessage: async (_, args) => {
            return await AllUserGroupChat.sendMessage(connectPool, args)
        }
    }
}

module.exports = resolvers