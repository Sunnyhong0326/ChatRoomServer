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
    type MessageSub {
        userId: ID!
        roomId: ID!
        message: String!
    }
    type Query {
        getChatRoomMessages(roomId: ID!): [Message]
    }
    type Subscription {
        realTimeMessages(roomId: ID!) : MessageSub
    }
    type Mutation {
        addMemberToRoom(userId: ID!, roomId: ID!): String!
        createRoom(roomName: String!): String!
        sendMessage(userId: ID!, roomId: ID!, text: String!): String!
        createUser(userName: String!): String!
    }
`   
module.exports = typeDefs