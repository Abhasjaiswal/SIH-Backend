const mongoose = require("mongoose");
const User = require("./models/User");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/student_portal", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const createUser = async () => {
  try {
    await connectDB();

    const user = new User({
      username: "admin",
      password: "admin", 
    });

    await user.save();
    console.log("Admin user created successfully.");

    mongoose.connection.close();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

createUser();
