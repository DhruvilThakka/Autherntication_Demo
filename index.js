const bycrypt=require("bcrypt");

const password="Dhruvil@2002";

bycrypt.hash(password,10,(err,hash)=>{
    console.log("hashrd Password:",hash);
})
