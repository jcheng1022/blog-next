import connectMongo from "../../utils/connectMongo";
import BlogEntry from "../../models/blogModel";

export default async function handler(req, res) {
  try {
    await connectMongo();
    console.log("Connected to MONGODb");
    const entry = await BlogEntry.create(req.body);
    console.log("CREATED DOCUMENT");
    res.json({ entry });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
