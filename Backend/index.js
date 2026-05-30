const express = require('express');
const app = express(); 
//const router = express.Router();
app.use(express.json());
const {userRouter} = require("./routes/user.js");
const {courseRouter} = require('./routes/course');
const adminRoutes = require('./routes/admin.js');
const port = 3000

app.use('/api/user', userRouter);
app.use('/api/course' , courseRouter);
app.use('/api/admin', adminRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})