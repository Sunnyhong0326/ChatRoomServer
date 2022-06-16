create table ChatRoom(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    roomName VARCHAR(255) NOT NULL
);

create TABLE Messages(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    userId Int,
    roomId INT,
    message VARCHAR(255) NOT NULL,
    sentAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table AllUsers(
    userId INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL
);

create table RoomMembers(
    Id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    roomId Int
);

create table Friend(
    userId INT,
    friendId INT
);