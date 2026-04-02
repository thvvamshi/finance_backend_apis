require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

const startServer = async () => {
  try {
    await connectDB(); // wait for DB

    // console.log("DB Connected");

    app.listen(process.env.PORT, () => {
      console.log("Server running on port", process.env.PORT);
    });

  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
