const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    if(req.url==='/home'|| req.url==='/'){
        let data=fs.readFileSync('templates/index.html');
        res.write(data);

    }else if(req.url==='/signin'){
        let data=fs.readFileSync('templates/signin.html');
        res.write(data);

    }
    else if(req.url==='/signup'){
        let data=fs.readFileSync('templates/signup.html');
        res.write(data);

    }
    else if(req.url==='/grocery'){
        let data=fs.readFileSync('templates/grocery.html');
        res.write(data);

    }
    else if(req.url==='/mobile'){
        let data=fs.readFileSync('templates/mobiles.html');
        res.write(data);

    }
    else if(req.url==='/electronics'){
        let data=fs.readFileSync('templates/electronics.html');
        res.write(data);

    }else if(req.url==='/cart'){
        let data=fs.readFileSync('templates/cart.html');
        res.write(data);

    }
    else{
        let data=fs.readFileSync('Static/error.html');
        res.write(data);

    }
    res.end();

    
}).listen(process.env.PORT,()=>{console.log('Server Started at port 8080')});
