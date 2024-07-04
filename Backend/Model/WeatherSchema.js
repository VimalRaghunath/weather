const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
  city: { type: String },
  temperature: { type: Number },
  icon: { type: String },
  description: { type: String },
  date: { type: Date, default: Date.now },
});


const Weather = mongoose.model("Weather", WeatherSchema);