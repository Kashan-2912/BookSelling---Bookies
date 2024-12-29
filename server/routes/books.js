var express = require("express");
var router = express.Router();
let bookModel = require("../db/book");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/add-book", async function (req, res, next) {
  try {
    const { title, category, description, price } = req.body;

    await bookModel.create({
      title,
      category,
      description,
      price,
    });

    res.status(200).json({ msg: "Book added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error adding the book", error: error.message });
  }
});

router.get("/get-books", async function (req, res, next) {
  try {
    const books = await bookModel.find();

    if (books.length < 1) {
      res.status(404).json({ msg: "Book not found" });
    } else {
      res.status(200).json(books);
    }
  } catch (error) {
    res.status(500).json({ msg: "Error fetching books", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bookId = req.params.id; // Access the 'id' directly from req.params
    console.log("Requested book ID:", bookId); // Log the requested book ID to check if it's correct
    const book = await bookModel.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    console.log("Book found:", book); // Log the book if found
    res.json(book);
  } catch (err) {
    console.error("Error fetching book:", err);
    res.status(500).json({ message: "Failed to fetch book details" });
  }
});

router.put("/update/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const { title, category, description, price } = req.body;

    const book = await bookModel.findById(id);

    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    const updatedBook = await bookModel.findByIdAndUpdate(
      id,
      { title, category, description, price },
      { new: true } // Return the updated document
    );

    res
      .status(200)
      .json({ book: updatedBook, msg: "Book updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error updating the book", error: error.message });
  }
});

router.delete("/delete/:id", async function (req, res, next) {
  try {
    const id = req.params.id;

    const book = await bookModel.findById(id);

    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    await bookModel.findByIdAndDelete(id);
    const books = await bookModel.find();
    res.status(200).json({ books, msg: "Book deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error deleting the book", error: error.message });
  }
});

module.exports = router;
