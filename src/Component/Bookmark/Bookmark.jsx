import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title, author} = bookmark;
    return (
        <div className="font-bold bg-white m-2 rounded-lg p-3">
            <h3 className="text-lg">{title}</h3>
            <h3 className="text-base">{author}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark:PropTypes.object
}
export default Bookmark;