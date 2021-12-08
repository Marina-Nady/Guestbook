const mongoose = require('mongoose');
const url = 'mongodb+srv://Marina:mny123456@cluster0.m2dmw.mongodb.net/Guestbook?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});