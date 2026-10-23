const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));
app.use("/uploads", express.static(uploadsDir));

/* INSERT - with file upload */
app.post("/add", upload.single("document"), (req, res) => {
  const { name, email, dob, gender, hobbies, phone, education } = req.body;
  const documentPath = req.file ? req.file.filename : null;

  const sql = `INSERT INTO students (name, email, dob, gender, hobbies, phone, document_path, education) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(sql, [name, email, dob, gender, hobbies, phone, documentPath, education], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).send("Error inserting student");
    }
    res.send("Inserted");
  });
});

/* UPDATE - with optional file replacement */
app.put("/update/:id", upload.single("document"), (req, res) => {
  const { name, email, dob, gender, hobbies, phone, education } = req.body;
  const id = req.params.id;

  // If a new file was uploaded, replace the old one
  if (req.file) {
    // Get old document_path to delete the old file
    db.query("SELECT document_path FROM students WHERE id=?", [id], (err, result) => {
      if (err) return res.status(500).send("Error updating student");

      if (result.length > 0 && result[0].document_path) {
        const oldFilePath = path.join(uploadsDir, result[0].document_path);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      const newDocumentPath = req.file.filename;
      const sql = `UPDATE students SET name=?, email=?, dob=?, gender=?, hobbies=?, phone=?, document_path=?, education=? WHERE id=?`;
      db.query(sql, [name, email, dob, gender, hobbies, phone, newDocumentPath, education, id], (err) => {
        if (err) {
          console.error("Update error:", err);
          return res.status(500).send("Error updating student");
        }
        res.send("Updated");
      });
    });
  } else {
    // No new file — keep existing document_path
    const sql = `UPDATE students SET name=?, email=?, dob=?, gender=?, hobbies=?, phone=?, education=? WHERE id=?`;
    db.query(sql, [name, email, dob, gender, hobbies, phone, education, id], (err) => {
      if (err) {
        console.error("Update error:", err);
        return res.status(500).send("Error updating student");
      }
      res.send("Updated");
    });
  }
});

/* FETCH */
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      console.error("Fetch error:", err);
      return res.status(500).send("Error fetching students");
    }
    res.send(result);
  });
});

/* DELETE */
app.delete("/delete/:id", (req, res) => {
  db.query("SELECT document_path FROM students WHERE id=?", [req.params.id], (err, result) => {
    if (err) {
      console.error("Delete fetch error:", err);
      return res.status(500).send("Error deleting student");
    }
    
    if (result.length > 0 && result[0].document_path) {
      const filePath = path.join(uploadsDir, result[0].document_path);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    
    db.query("DELETE FROM students WHERE id=?", [req.params.id], (err) => {
      if (err) {
        console.error("Delete error:", err);
        return res.status(500).send("Error deleting student");
      }
      res.send("Deleted");
    });
  });
});

/* DOWNLOAD FILE */
app.get("/download/:filename", (req, res) => {
  const filePath = path.join(uploadsDir, req.params.filename);
  
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send("File not found");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});