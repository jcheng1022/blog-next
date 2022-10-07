import React from "react";
import Blog from "./Blog";

export default function BlogList(props) {
  return (
    <div>
      {props.blogs.map((blog) => (
        <Blog
          id={blog.id}
          author={blog.author}
          title={blog.title}
          category={blog.category}
          access={blog.access}
          body={blog.body}
        />
      ))}
    </div>
  );
}
