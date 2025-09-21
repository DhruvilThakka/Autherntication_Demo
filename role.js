app.post("/login",(req,res)=>{
    const{username}=req.body;
    let role="guest";
    if(username==="admin") role="admin";
    else if(username==="user") role="user";
    else if(username==="user") role="user";

    const user={username,role};
    const acessToken=jwt.sign(user,SECRET_KEY,{expiresIn:"15m"});
    const refreshToken=jwt.sign(user,REFRESH_SECRET,{expiresIn:"7d"});

    refreshToken.push(refreshToken);
    res.json({acessToken,refreshToken});
});

app,get("/admin",authenticateToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"erlcome admin ! You can Manage All The Users!"});
});

app,get("/user",authenticateToken,authorizeRoles("user","admin"),(req,res)=>{
    res.json({message:'Werlcome ${req.user.username}! This is Your Profile}! '});
});

app,get("/guest",authenticateToken,authorizeRoles("guest","user","admin"),(req,res)=>{
    res.json({message:"welcome Guest! Your Access is Granted!"});
});