drop database if exists ToDoApp;

create database ToDoApp;

use ToDoApp;

create table User(
    _idUser varchar(20) not null,
    email varchar(100) not null unique, 
    `name` varchar(100) not null,
    `password` varchar(100) not null
);

alter table User add constraint pk_User primary key(_idUser);

create table Task(
    _idTask varchar(20) not null,
    title varchar(100) not null,
    `description` varchar(1500) not null,
    isDone tinyint(1) not null,
    startDate date not null,
    endDate date,
    _idUser varchar(20) not null
);

alter table Task add constraint pk_Task primary key(_idTask);
alter table Task add constraint fk_User_Task foreign key(_idUser) references User(_idUser);

create table ItemTask(
    _idItemTask integer not null,
    isDone tinyint(1) not null,
    `text` varchar(30) not null,
    _idTask varchar(20) not null
);

alter table ItemTask add constraint pk_ItemTask primary key(_idItemTask,_idTask);
alter table ItemTask add constraint fk_Item_ItemTask foreign key(_idTask) references Task(_idTask);
