import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, bookmarksHandle}) => {
    const {cover, author_img, author, posted_date,reading_time} = blog;
    return (
// every blog section        
        <div className='mt-4 border-b-2'>
            <img className='rounded-md' src={cover} alt="Blog image" />
{/* profile and bookmark button section  */}
            <div className='flex justify-between'>
                <div className='flex my-3'>
                    <img className='w-12 rounded-full' src={author_img} alt="" />
                    <div className='ml-3 mt-2'>
                        <h3 className="text-xl font-black">{author}</h3>
                        <h3 className='text-sm my-1 text-slate-500 font-semibold'>{posted_date}</h3>
                    </div>
                </div>
                <div className='flex items-center text-slate-500'>
                    <h3>{reading_time} min read</h3>
                    <button onClick={() =>bookmarksHandle(blog)} className='ml-2 text-xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
{/* title hastag mark as read  */}
        </div>
    );
};

Blog.propTypes  = {
    blog:PropTypes.object.isRequired
}

export default Blog;