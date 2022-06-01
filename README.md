# ChatRoomServer
This server combines MySQL database and Apollo Server  

# MySQL database
1.Create a database called Chat  
2.Create the below tables  
  
ChatRoom  
+---------------------+  
Id | roomName  
+---------------------+  
  
Messages   
+---------------------------------------+  
Id | userId | roomId | message | sentAt  
+---------------------------------------+  
  
AllUsers  
+-------------+  
Id | userName  
+-------------+  
  
RoomMembers  
+-------------------+  
Id | userId | roomId  
+-------------------+  

# GraphQL Queries and Mutations
type Query {  
getChatRoomMessages(roomId: ID!) : [Message]  
    }  
    type Mutation {  
        addMemberToRoom(userId: ID!, roomId: ID!): String!  
        createRoom(roomName: String!): String!  
        sendMessage(userId: ID!, roomId: ID!, text: String!): String!  
        createUser(userName: String!): String!  
    }  
