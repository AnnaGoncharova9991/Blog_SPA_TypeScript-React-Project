import React, { useState } from "react";
import Layout from "../../components/Layout";
import Server from "../../components/Server";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState();
  return (
    <>
      
        <div>BlogsPage</div>
        <Server />
      
    </>
  );
};

export default BlogsPage;
