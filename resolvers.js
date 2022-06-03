const AllUserGroupChat = require('./model/GroupChat')
import connectPool from './database'
import pubsub from './model/Publish'

const resolvers = {
    Subscription: {
        realTimeMessages: {
            subscribe :(_, args) => pubsub.asyncIterator([`ChatRoom${args.roomId} Messages`])
        } 
    },
    Query: {
        getChatRoomMessages: async(_, args) => {
            return await AllUserGroupChat.getChatRoomMessages(connectPool, args)
        }
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
            await AllUserGroupChat.sendMessage(connectPool, args)
            pubsub.publish(`ChatRoom${args.roomId} Messages`, { realTimeMessages: {
                userId: args.userId,
                roomId: args.roomId,
                message: args.text
            }})
            console.log('ues')
            return `Send messages successfully!`
        }
    }
}

module.exports = resolvers