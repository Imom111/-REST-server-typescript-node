DROP DATABASE IF EXISTS curso_node;
CREATE DATABASE curso_node;
USE curso_node;

CREATE TABLE usuarios(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    estado BOOLEAN NOT NULL DEFAULT TRUE
);
ALTER TABLE usuarios ADD createdAt TIMESTAMP;
ALTER TABLE usuarios ADD updatedAt TIMESTAMP;

INSERT INTO usuarios ( nombre, email ) VALUES ( 'ivan', 'ivan@gmail.com' );
INSERT INTO usuarios ( nombre, email ) VALUES ( 'moises', 'moises@gmail.com' );
INSERT INTO usuarios ( nombre, email, estado ) VALUES ( 'ivan22', 'ivan2@gmail.com', false);

SELECT * FROM usuarios;

