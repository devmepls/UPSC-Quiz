const app = require("./app.js");

app.listen(process.env.PORT, () => {
  console.log(`Server is Running @ Port ${process.env.PORT}`);
});
