const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db')
const products = require('./routes/productRoutes')

const app = express();

db();
dotenv.config();
app.use(cors());
app.use(express.json());


app.use("/product", products);

app.get("/", (req, res) => {
    res.send({ message: "Server is running properly...!" })
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})