import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import publishRouter from './route/publish.js';
import getBlogsRouter from './route/getBlogs.js';
import fullBlogRouter from './route/fullblog.js';

const publish = express()
publish.use(cors())
publish.use(express.json())

publish.use('/publish', publishRouter)

publish.use('/blogs', getBlogsRouter)




//publish.use('/blog', fullBlogRouter)

const port = 8080


publish.listen(port, () => {
    console.log("server started with port 8080")
})
/*publish.listen(port).then(() => console.log('server started with port 8080'))

mongoose.connect('mongodb+srv://kumaraswamy491:Kumar%40123@cluster0.sqt5uzn.mongodb.net/publish')
.then(() => console.log('connect to mongoose db'))*/

/*publish.listen(port)
  .then(() => console.log('server started with port 8080'))
  .catch(error => console.error('Error starting server:', error));*/

mongoose.connect('mongodb+srv://kumaraswamy491:Kumar%40123@cluster0.sqt5uzn.mongodb.net/blogs')
  .then(() => console.log('connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));