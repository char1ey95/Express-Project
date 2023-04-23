CREATE TABLE users (
  userid VARCHAR(50) PRIMARY KEY,
  userpw INT NOT NULL,
  username VARCHAR(50) NOT NULL,
  nickname VARCHAR(50) NOT NULL,
  birth DATE NOT NULL,
  gender CHAR(4) DEFAULT '남자',
  telephone CHAR(32) NULL,
  mobile CHAR(32) NOT NULL,
  author TINYINT(1) DEFAULT 1,
  level int default 3
);

CREATE TABLE boards (
  idx INT PRIMARY KEY AUTO_INCREMENT,
  subject VARCHAR(50),
  userid VARCHAR(50),
  FOREIGN KEY (userid) REFERENCES users(userid),
  content TEXT,
  registerDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  hit INT DEFAULT 0
);