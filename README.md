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
