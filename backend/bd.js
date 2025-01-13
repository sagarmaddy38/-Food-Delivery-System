
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://sagar-food:foodsystem@cluster4.8hh7o.mongodb.net/foods?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Fetch food items collection
    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    // Fetch foodCategory collection


    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();


    // Assign to global variables

    global.food_items = data;
    // console.log(data);
    
    global.foodCategory = catData;

    console.log("Data fetched and assigned globally.");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;





