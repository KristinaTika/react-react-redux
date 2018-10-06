import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../action-creators/actionCreators';
import PropTypes from 'prop-types';
import Post from './Post';
import './PostsList.css';
import Loader from '../partials/Loader';

class PostsList extends Component {
  
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { error, posts } = this.props;
        let displayPosts =  <Loader />;
        if(posts.length === 0) {
            return  <div>
                        <p id="error"> {error} </p>
                        <Loader />
                    </div>
        }
        displayPosts = posts.map(post => <Post key={post.id} post={post} />)
        return(
            <div id="posts-wrapper">
                <h1> Posts: </h1>
                <ul id="posts-list">
                    {displayPosts}
                </ul>
            </div>  
        );
    }
}
PostsList.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);