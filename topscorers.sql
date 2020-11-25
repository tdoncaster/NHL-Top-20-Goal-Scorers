CREATE DATABASE nhltop20;
USE nhltop20;

CREATE TABLE topscorers (
id INT auto_increment,
name VARCHAR(255),
teams VARCHAR(255),
gamesplayed INT,
goals INT,
createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY (id)
);


CREATE TABLE topscorers (
id INT auto_increment,
name VARCHAR(255),
position VARCHAR(255),
gamesplayed INT,
goals INT,
createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY (id)
);

INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES
('Wayne Gretzky', 'C', '1487','894');

Select * from topscorers;

