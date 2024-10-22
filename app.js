// /*

// GEREKLİ PAKETLER YÜKLENİYOR...

// */
// var http = require('http');
// var express = require('express');

// var app = express();

// app.set('port', process.env.PORT || 3005); // GİRİŞ PORTU AYARLANDI
// app.set('views', __dirname + '/app/server/views'); // VIEW KLASÖRÜ TANITILDI
// app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI
// app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI

// require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

// /*

// HTTP SERVER OLUŞTURULDU

// */
// http.createServer(app).listen(app.get('port'), function(){
// 	console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
// });

import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

await connectToDatabase();

app.listen(3000);
