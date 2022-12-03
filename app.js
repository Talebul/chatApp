// External Imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

// Internal Imports
const {
  notFoundHandler,
  errorHanndller,
} = require("./middleware/common/errorHandler");
const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.log(err));

// Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// Parse Cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing Setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// Error handling

// 404 Not Found Handler
app.use(notFoundHandler);

// Common Error Handler
app.use(errorHanndller);

app.listen(process.env.PORT, () => {
  console.log(`App listeing to port ${process.env.PORT}`);
});
