import './BlogCard.scss';

interface IBlogCard {
    title: string,
    imageUrl: string,
    publishedAt: string,

}

const BlogCard = ({title, imageUrl, publishedAt}: IBlogCard) => {
    return (
        <div className='blog-card-wrapper'>
            <>
            <div className='blog-card-img-wrapper'>
                <img className='blogcard-img' src={imageUrl}/>
            </div>
            <div className='blog-card-text-wrapper'>
                <span className='blog-card-published-date'>{publishedAt}</span>
                <h4 className='blog-card-text'>{title}</h4>
            </div>
            </>
            
        </div>
    )
};

export default BlogCard;