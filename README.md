# ChatRoomServer
This server combines MySQL database and Apollo Server  

# MySQL database
1.Create a database called Chat  
2.Create the below tables  
  
ChatRoom  
|Id | roomName |  
|---|---|  
| 1 | Room1 |  
| 2 | Room2 |  
  
Messages   
| Id | userId | roomId | message | sentAt |  
|-|-|-|-|-|  
| 1 | 2 | 3 | Hello World! | 2022-3-23|  
| 2 | 1 | 3 | Hi | 2022-3-24|
  
AllUsers   
|Id | userName|  
|-|-|  
| 1 | Kevin |  
| 2 | Stanley|  
  
RoomMembers  
| Id | userId | roomId |  
|-|-|-|  
| 1 | 23 | 21|  
| 2 | 2 | 21 |  

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
