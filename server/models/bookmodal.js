import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  image: String,
  ogprice: Number,
  catogery: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
