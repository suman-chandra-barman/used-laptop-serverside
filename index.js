const express = require("express");
const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uhbaknf.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// connect with database
// const dbConnect = async () => {
//   try {
//     await client.connect();
//   } catch (error) {
//     console.error(error);
//   }
// };
// dbConnect();

// root api
app.get("/", (req, res) => {
  res.send("Demo Server is Running");
});

app.listen(port, () => {
  console.log(`Demo server is running on port ${port}`);
});