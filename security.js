const password="Dhruvil@2002";

bcrypt.hash(password,10,(err,hash)=>{
    console.log("hashrd Password:",hash);

    bcrypt.compare("Dhruvil@2002",hash,(err,result)=>{
        console.log("Result =",result);
    });
   
});