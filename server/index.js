import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';

const app = express();



app.use(bodyParser.json({limit: "40mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "40mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://cs157:Passw0rd@cs157.j1ymg.mongodb.net/SocialMediaApp?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


