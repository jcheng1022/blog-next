import { Schema, model, models } from "mongoose";

const entrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const BlogEntry = models.Blog || model("Entry", entrySchema);

export default BlogEntry;
