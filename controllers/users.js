import {v4 as uuid}from 'uuid';

let users = [];

export const getUsers = (req, res)=>{
    console.log(`Users Recorded in Database:${users}`);
    res.send(users);
}

export const createUser = (req, res)=>{
    const user = req.body;
    users.push({...user, id: uuid()});
    console.log(`User[${user.username}] added to Database`);

};

export const getUser = (req, res)=>{
    res.send(req.params.id)
};

export const deleteUser = (req, res)=>{
    console.log(`User with the id ${req.params} was deleted`);
    users = users.filter((user)=>user.id !== req.params.id);
};

export const updateUser = (req, res)=>{
    const user = users.find((user)=> user.id ===req.params.id);
    user.username = req.body.username;
    user.age = req.body.age;
    console.log(`Username was updated to ${req.body.username} age was updated to ${req.body.age}`)
};