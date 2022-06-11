const { gql } = require('apollo-server-express')

const typeDefs = gql`
    scalar Date
    interface Timestamps {
        sentAt: Date!
    }
    type ChatRoom {
        Id: ID!
        roomName: String!
    }
    type User {
        Id: ID!
        userName: String!
    }
    type Message implements Timestamps {
        Id: ID!
        userId: ID!
        roomId: ID!
        message: String!
        sentAt: Date!
    }
    type RoomMembers {
        Id: ID!
        userId: ID!
        roomId: ID!
    }
    type UserChatRoom {
        roomId: ID
    }
    type MessageSub {
        userId: ID!
        roomId: ID!
        message: String!
    }
    type Task {
        Id: ID!,
        task: String!
    }
    type Query {
        getChatRoomMessages(roomId: ID!): [Message]
        getUserChatRoom(userId: ID!): [UserChatRoom]
        getUserByName(userName: String!): [User]
        getTask(Id: ID!): Task
        getInitialTasks(number: Int!):[Task]
        getAllFriends(userId: ID!): [ID!]
        getUserById(userId: ID!): [User]
        getChatRoomName(roomId: ID!): String!
    }
    type Subscription {
        realTimeMessages(roomId: ID!) : MessageSub
    }
    type Mutation {
        addMemberToRoom(userId: ID!, roomId: ID!): String!
        addFriend(userId: ID!, friendId: ID!): String!
        createRoom(roomName: String!): ID!
        sendMessage(userId: ID!, roomId: ID!, text: String!): String!
        createUser(userName: String!): ID!
    }
`   
module.exports = typeDefs