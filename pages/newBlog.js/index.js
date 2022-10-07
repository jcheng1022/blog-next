import React from "react";
import { useState } from "react";
import axios from "axios";

export default function NewBlog() {
  const [formData, setFormData] = useState({
    title: " ",
    author: " ",
    category: " ",
    access: " ",
    body: " ",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    axios({
      method: "post",
      url: "http://localhost:3000/api/blogs",
      data: formData,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          placeholder="author"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          placeholder="category"
          onChange={handleChange}
        />
        <input
          type="text"
          name="access"
          value={formData.access}
          placeholder="access"
          onChange={handleChange}
        />
        <input
          type="text"
          name="body"
          value={formData.body}
          placeholder="body"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
