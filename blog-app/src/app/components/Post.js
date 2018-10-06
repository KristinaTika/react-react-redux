import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Post.css';

const Post = (props) => {

    const { id, title } = props.post;
    
    return (
        <li>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}><input type="button" value="Read More" /> </Link>
        </li>
    );
}
Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;