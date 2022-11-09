import React from "react";
import { useParams } from "react-router";


const BlogPage = () => {
  const { id } = useParams();

  return (
    <>     
        <div>Blog {id} </div>      
    </>
  );
};

export default BlogPage;
