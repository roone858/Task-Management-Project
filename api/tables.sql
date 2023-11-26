CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
    taskId SERIAL PRIMARY KEY,
    userId INT REFERENCES users(userId) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    dueDate DATE,
    isCompleted BOOLEAN
);