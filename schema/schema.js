const { gql } = require('apollo-server')

const typeDefs = gql`
    type ChatRoom {
        Id: ID!
        roomName: String!
    }
    type User {
        Id: ID!
        userName: String!
    }
    type Message {
        Id: ID!
        userId: ID!
        roomId: ID!
        message: String!
        time: String
    }
    type RoomMembers {
        Id: ID!
        userId: ID!
        roomId: ID!
    }
    type Query {
        getChatRoomMessages(roomId: ID!) : [Message]
    }
    type Mutation {
        addMemberToRoom(userId: ID!, roomId: ID!): String!
        createRoom(roomName: String!): String!
        sendMessage(userId: ID!, roomId: ID!, text: String!): String!
        createUser(userName: String!): String!
    }
`
module.exports = typeDefs