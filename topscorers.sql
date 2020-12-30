CREATE DATABASE nhltop20;
USE nhltop20;

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

INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Wayne Gretzky', 'C', '1487','894');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Gordie Howe', 'RW', '1767', '801');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Jaomir Jagr', 'RW', '1733', '766');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Brett Hull', 'RW', '1269', '741');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Marcel Dionne', 'C', '1348', '731');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Phil Esposito', 'C', '1282', '717');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Mike Gartner', 'RW', '1432', '708');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Alex Ovechkin', 'LW', '1152', '706');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Mark Messier', 'C', '1756', '694');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Steve Yzerman', 'C', '1756', '694');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Mario Lemieux', 'C', '915', '690');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Teemu Selanne', 'RW', '1451', '684'); 
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Luc Robitaille', 'LW', '1431', '668');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Brendan Shanahan', 'C', '1524', '656');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Dave Andrechuck', 'LW', '1639', '640'); 
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Joe Sakic', 'C', '1378', '625');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Jerome Iginla', 'C', '1554', '625');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Bobby Hull', 'LW', '1063', '610');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Dino Ciccarelli', 'RW', '1232', '608');
INSERT INTO topscorers (name, position, gamesplayed, goals) VALUES ('Jari Kurri', 'RW', '1251', '601');









CREATE USER 'topnhl'@'localhost' IDENTIFIED WITH mysql_native_password BY 'topnhl';
GRANT ALL ON nhltop20.* TO 'topnhl'@'localhost';




Select * from topscorers;

