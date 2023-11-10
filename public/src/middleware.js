import jwt from "jsonwebtoken";
import { secretKey }from './creds.js';


export async function isAuthenticated(req, res, next) {
    const { authorization } = req.headers;
    //first check if they have a token 
    if (!authorization){
        res.status(401).send({ message: 'NO AUTHORIZATION TOKEN FOUND'});
        return;
    }
    //then check if the token is valid
    jwt.verify(authorization, secretKey, (err, decoded) => {
        if (err) {//not valid token :
        res.status(401).send(err);
        return;
        })
    
    // valid token:
    
     req.locals = decoded; // attach our decoded token to the request....
        // if so, go on :
        next();
    };


    .catch (err => {
        res.status(401).send(err);
    })
    // and if so go on 
    next();
}