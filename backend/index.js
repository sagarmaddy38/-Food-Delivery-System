

const express = require('express')
const app = express()
const cors = require("cors");
// const port = 5000


global.foodData = require('./bd')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})


app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
  })
);


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`)
})