import React from "react";
import { Context } from "react";

export default function BlogDetail(props) {
  return <div>BlogDetail</div>;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          blog: "m1",
        },
      },
      {
        params: {
          blog: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const blogId = context.params.blog;
  console.log(blogId);
  return {
    props: {
      blogData: {
        id: blogId,
        title: "My second blog post",
        author: "TechSis12",
        category: "Self-Care",
        access: "Public",
        body: "test body for the second blog post. This will be the place where the main text block will take place",
      },
    },
  };
}
