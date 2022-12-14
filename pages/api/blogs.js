import connectMongo from "../../utils/connectMongo";
import BlogEntry from "../../models/blogModel";

export default async function handler(req, res) {
  if (req.method === "POST") {
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
  } else if (req.method === "GET") {
    try {
      await connectMongo();
      console.log("connected to mongo");
      const entry = await BlogEntry.find({});
      console.log("fetched data");
      res.json({ entry });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
}
