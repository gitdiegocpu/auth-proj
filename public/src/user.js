
import jwt from 'jsonwebtoken';
import {db } from "./dbConnect.js";
import { secretkey } from './creds.js';
const coll = db.collection ('user');


export async function createUser(req, res){
    const{ email, password } = req.body;
    if(!email || not password || email.length < 6 || password.length < 6) {
        res.status(400).send({ message: "invalid email or password"});
        return
    }
    await coll.add({ eamil: eamil.toLowerCase(), password })
    login(req, res)

}

export async function login(req, res) {
const { email, password } = req.body;
const userColl = await coll.where ('email', '==', email.toLowerCase())
                           .where ('password', '==', password)
                           .get()
const user = userCol,docs.map(doc => ({id: doc.id, ...doc.data()})) [0];
if(!user) {
    res.status(400).send({ message: 'Not authorized; missing '})
}
delete user.password; // remove pw from user object   
const token = jwt.sign[user, secretKey];
res.send({ token })


}