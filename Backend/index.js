const express = require('express');
const app = express(); 
const {mongoose}  = require('./db.js');
//const router = express.Router();
app.use(express.json());
const {userRouter} = require("./routes/user.js");
const {courseRouter} = require('./routes/course');
const adminRoutes = require('./routes/admin.js');
const port = 3000

app.use('/api/user', userRouter);
app.use('/api/course' , courseRouter);
app.use('/api/admin', adminRoutes)
async function main(){
  await mongoose.connect("mongodb+srv://devanshm511_db_user:7D79wgXyqpsN6IRx@cluster0.alyect3.mongodb.net/course-App");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
main();