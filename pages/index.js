import Head from "next/head";
import Image from "next/image";
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
  return (
    <div className={styles.container}>
      <BlogList blogs={props.blogs} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogs: dummy_data,
    },
    revalidate: 10,
  };
}
