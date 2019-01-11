import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";
import categoryRoute from "./src/routes/categoryRoutes";

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/CRMdb",
  {
    useMongoClient: true
  }
);

//bodyparser setup
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

routes(app);
categoryRoute(app);

//serving static files
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(`Node and express is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on ${PORT}`));
