const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {type:String},
    image: {type: String },
    paragraph: {type: String },
    link: {type: String },
    price: {type: String },
    discountedPrice: {type: String },
    discountCode: {type: Array },
    star: {type: Array },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date },
    deleted_at: { type: Date },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("deal", schema);