// module imports
const express = require("express");

// PORT - the port at which the application will listen and serve
const PORT = 4000;

// initializing express app
const app = express();

// entry point to all requests
app.get("*", (req, res) => {
  return res.status(200).json({ message: "Ok" });
});

// application listening
app.listen(PORT, () => {
  console.log(`App is now serving at PORT : ${PORT}`);
});
