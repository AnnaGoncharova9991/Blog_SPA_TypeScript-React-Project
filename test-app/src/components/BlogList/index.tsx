import { isMemberName } from "typescript";
import { IBlogPost } from "../../types/blogsTypes";
import BlogCard from "./BlogCard";
import './BlogList.scss'

interface IBlogList {
    blogs: IBlogPost[];
}

const BlogList = ({blogs}: IBlogList) => {
    return (
        <ul>
            {
                blogs.map( item => {
                    return (
                        <li key= {item.id}>
                            <BlogCard title = {item.title} imageUrl = {item.imageUrl} publishedAt = {item.publishedAt} />
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default BlogList;