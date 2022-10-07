import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import BlogList from "../components/BlogList";
import styles from "../styles/Home.module.css";

const dummy_data = [
  {
    id: "m1",
    title: "My first blog post",
    author: "TechBro23",
    category: "Tech",
    access: "Private",
    body: "test body for the first blog post. This will be the place where the main text block will take place",
  },
  {
    id: "m1",
    title: "My second blog post",
    author: "TechSis12",
    category: "Self-Care",
    access: "Public",
    body: "test body for the second blog post. This will be the place where the main text block will take place",
  },
];

export default function Home(props) {
  const [allBlogs, setAllBlogs] = useState([]);
  console.log(allBlogs);
  return (
    <div className={styles.container}>
      <BlogList blogs={props.blogs} />
    </div>
  );
}

export async function getStaticProps() {
  axios({
    method: "GET",
    url: "http://localhost:3000/api/blogs",
  }).then((res) => console.log(`fetched from mongo: ${res}`));
  return {
    props: {
      blogs: dummy_data,
    },
    revalidate: 10,
  };
}
