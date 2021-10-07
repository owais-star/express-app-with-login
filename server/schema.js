const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new mongoose.Schema(
{
    title: String,
    description: String,
    created_on: { type: Date, default: Date.now }
});

const emailSchema = new schema(
{
    email: String
    // { 
    //     type: String,
    //     required: true,
    //     match: /.+\@.+\..+/,
    //     unique: true
    //   }
});

const posts = mongoose.model("posts" , postSchema);
const emails = mongoose.model("emails", emailSchema)

module.exports = {posts,emails};