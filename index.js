const express = require("express");
const { default: mongoose } = require("mongoose");
app = express();
const dotenv = require("dotenv");
dotenv.config();
const useRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", useRouter);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT || 6000, () => {
  console.log("Server is running!");
});
