const express = require("express");
const errorHandler = require("./middleware/error.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

app.use(errorHandler);
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/finance", require("./routes/finance.routes"));
app.use("/api/dashboard", require("./routes/dashboard.routes"));

// api for documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// check for server health
app.get("/", (req, res) => {
  res.send(`
    <h2>Finance Backend API</h2>
    <p>Status: <b style="color:green;">Running</b></p>
    <p>Swagger Docs: <a href="/api-docs">/api-docs</a></p>
  `);
});

module.exports = app;
