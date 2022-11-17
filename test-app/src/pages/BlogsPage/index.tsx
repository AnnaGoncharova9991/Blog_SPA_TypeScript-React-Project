import React, { useState, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { blogsActionCreators } from "../../redux/actions/blogsActionCreators";
import { blogsPostsBlogsSelector } from "../../redux/selectors/blogsSelectors";
import BlogList from "../../components/BlogList";


const BlogsPage = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector (blogsPostsBlogsSelector);

  useEffect (() => {
    dispatch(blogsActionCreators.getBlogs())
  },[dispatch]);

  return (
    <>
      <BlogList blogs = {blogs} />      
    </>
  );
};

export default BlogsPage;
