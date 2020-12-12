CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (username)
);

INSERT INTO users (first_name, last_name, email, username, password)
VALUES ("User1", "User1",  "user1@user.com", "username1" "testpassword1" ),
("User2", "User2",  "user2@user.com", "username2" "testpassword2" );


CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (username)
);

INSERT INTO users (first_name, last_name, email, username, password)
VALUES ("User1", "User1",  "user1@user.com", "username1" "testpassword1" ),
("User2", "User2",  "user2@user.com", "username2" "testpassword2" );


