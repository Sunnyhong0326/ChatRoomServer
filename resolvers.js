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
        },
        getUserChatRoom: async(_, args) => {
            return await AllUserGroupChat.getUserChatRoom(connectPool, args)
        },
        getUserByName: async(_, args) => {
            return await AllUserGroupChat.getUserByName(connectPool, args)
        },
        getTask: async(_, args) => {
            return await AllUserGroupChat.getTask(connectPool, args)
        },
        getInitialTasks: async(_, args) => {
            return await AllUserGroupChat.getInitialTasks(connectPool, args)
        },
        getAllFriends: async(_, args) => {
            return await AllUserGroupChat.getAllFriends(connectPool, args)
        },
        getUserById: async(_, args) => {
            return await AllUserGroupChat.getUserById(connectPool, args)
        },
        getChatRoomName: async(_, args) => {
            return await AllUserGroupChat.getChatRoomName(connectPool, args)
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
            return `Send messages successfully!`
        },
        addFriend: async (_, args) => {
            await AllUserGroupChat.addFriend(connectPool, args.userId, args.friendId)
            await AllUserGroupChat.addFriend(connectPool, args.friendId, args.userId)
            return 'Add friend successfully!'
        }
    }
}

module.exports = resolvers