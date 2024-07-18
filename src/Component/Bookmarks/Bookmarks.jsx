import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks)
    return (
        <div className="md:w-1/3 mt-6 ml-3">
        <div className='mb-3 bg-gray-100 rounded-lg p-5'>
            <h1 className="text-2xl font-semibold p-2">Reading Time: {readingTime}</h1>
        </div>
        <div className='bg-gray-100 h-full rounded-lg p-5 mb-2'>
            <h1 className="text-2xl font-semibold p-2">Bookmarks Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;