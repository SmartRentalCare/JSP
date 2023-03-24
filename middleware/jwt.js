'use strict';

let jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtCreate(userData){
  return new Promise(function (resolve, reject) {
    console.log(userData)
      jwt.sign({
        user: userData,
      }, process.env.JWT_SECRET, {
        expiresIn: '30m',
        issuer: 'Conative',
      },function(err,token){
        if(err) reject(err)
        else resolve(token)
      });
  })
}

function jwtCerti(token){
  return new Promise(function (resolve, reject) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
          console.log("JWT was Expired!")
        }
        if(decoded){
          resolve(decoded);
        }
        else{
          resolve(false);
        }
      });
  })
}

module.exports = {
  jwtCreate,
  jwtCerti
};