const {Client} = require('pg');//pg'nin içindeki client'ı alıyorum
require('dotenv').config();//.env dosyasını buraya yüklüyorum

const client = new  Client({
    user:process.env.DATABASE_USER, //env dosyasındaki veriyi bu şekilde eşitliyoruz
    password:process.env.DATABASE_PASSWORD,
    host:process.env.DATABASE_HOST,
    port:process.env.DATABASE_PORT,
    database:process.env.DATABASE_NAME
})

client.connect().then(() =>{
    console.log("VeriTabanina Baglandi");
}).catch(err => console.log("Baglanti hatasi",err));

client.query('SELECT * FROM  users',(err,res) =>{
    if(err){
        console.log('Sorgu Hatasi',err);
    }else{
        console.log(res.rows);
    }
    client.end();
})