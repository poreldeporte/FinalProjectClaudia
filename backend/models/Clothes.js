const { Schema, model } = require("mongoose");

const clothesSchema = new Schema(
    {
        title: String,
        description: String,
        price: Number, 
        contributor: {type: Schema.Types.ObjectId, ref: "User"},
    },
    {
    timeseries: true,
    timestamps: true,
    }
);

const Clothes = model("Clothes", clothesSchema)

module.exports = Clothes;
