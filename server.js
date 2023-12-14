import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { config as dotenvConfig } from "dotenv";

dotenvConfig(); // Loading environment variables from the .env file
const envUserName = process.env.MONGODB_USERNAME;
const envPassWord = process.env.MONGODB_PASSWORD;

const app = express();
//defining middleware
app.use(bodyParser.json());
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/rolex");
// mongoose.connect("mongodb://127.0.0.1:27017/rolex");


mongoose
  .connect(
    `mongodb+srv://${envUserName}:${envPassWord}@mainnikedb.jx4pwkk.mongodb.net/rolex`
  )
  .then(() => console.log("mongodb connected"))
  .catch((error) => {
    console.log("mongodb error: ", error);
  });

const rolexSchema = new mongoose.Schema({
  _id: Number,
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Rolex = mongoose.model("rolexCollection", rolexSchema);

app.get("/", (req, res) => {
  res.send("<h1>Hello !World</h1>");
});

function generateUniqueId() {
  // Implement your logic to generate a unique number (e.g., use a counter)
  // For simplicity, this example uses a random number.
  return Math.floor(Math.random() * 1000000);
}



app.post("/admin", async (req, res) => {
  const { adminImage, adminTitle, adminDesc } = req.body;
  const uniqueId = generateUniqueId();
  try {
    const addRolex = await Rolex.create({
      _id: uniqueId,
      img: adminImage,
      title: adminTitle,
      desc: adminDesc,
    });

    console.log(addRolex);
    res.status(200).json(addRolex); // Use res.status(status).json(obj) instead of res.json(status, obj)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/fetchrolex", async (req, res) => {
  try {
    const documents = await Rolex.find();
    const data = documents.map((doc) => ({
      _id: doc._id,
      img: doc.img,
      title: doc.title,
      desc: doc.desc,
    }));
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Fetch error" });
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`port is live on ${port}`);
});
