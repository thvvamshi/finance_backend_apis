const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/finance", require("./routes/finance.routes"));
app.use("/api/dashboard", require("./routes/dashboard.routes"));

module.exports = app;
