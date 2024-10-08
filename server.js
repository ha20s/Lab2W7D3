const express = require('express')

const app = express()

const port = 1212

app.use(express.json());


// title , imf , des 

const container = []


app.get("/", (req, res)=>{
    res.send("Hasna")

})

app.get('/blog' , (req,res) => {
    res.json(container)
})

app.post('/blog', (req, res) => {
    const blogTitle = req.body.blogTitle;
    const blogImage = req.body.blogImage;
    const bolgDes = req.body.bolgDes;
    const blog = {  blogTitle, blogImage, bolgDes };
    container.push(blog);
    res.json(blog);
});

app.patch('/blog/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const blog =  container[id]
    const { blogTitle , blogImage , bolgDes} = req.body
    blog.blogTitle = blogTitle
    blog.blogImage = blogImage
    blog.bolgDes = bolgDes
    res.json(blog)
})

app.delete('/blog/:id', (req,res)=>{
    const userId = parseInt(req.params.id);
    container.splice(userId, 1);
    res.send('DELETE request to homepage')
})

app.listen(port, () => {

console.log(`Example app listening on port ${port}`)
    
})