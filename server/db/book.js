const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_DB_URI;
console.log('MongoDB URI:', URI);
mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


const bookSchema = mongoose.Schema({
  title: String,
  description: String,
  price: String,
  category: String,
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
