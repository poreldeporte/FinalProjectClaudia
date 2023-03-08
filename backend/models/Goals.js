const { Schema, model } = require("mongoose");

const goalsSchema = new Schema(
    {
        title: String,
        description: String,
        contributor: {type: Schema.Types.ObjectId, ref: "User"},
    },
    {
    timeseries: true,
    timestamps: true,
    }
);

const Goals = model("Goals", goalsSchema)

module.exports = Goals;
