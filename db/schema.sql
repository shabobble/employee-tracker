DROP DATABASE IF EXISTS employeeMgrDB;

CREATE DATABASE employeeMgrDB;

USE employeeMgrDB;

CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10)
);

CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(7, 2),
    department_id INTEGER NOT NULL
);

CREATE TABLE departments (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY
    dept_name VARCHAR(30)
);

