const express= require('express');

const app = express();


var date_ob = new Date();
var jour= date_ob.getDay()+1
var heurs=date_ob.getHours()
const middleware=(req,res,next)=>{
    if(jour>0 && jour<7 && heurs<17 && heurs>9){next()}
   else{res.send('<h1>Horaire : du lundi au vendredi, de 9h à 17h</h1>')} 
}

app.get('/',middleware,(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})
app.get('/services',middleware,(req,res)=>{
    res.sendFile(__dirname + '/public/services.html')
})
app.get('/contact',middleware,(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})


const port = 5000;

app.listen(port, () => console.log(`port is running on port ${port}`));


