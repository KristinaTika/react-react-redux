import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../action-creators/actionCreators';
import PropTypes from 'prop-types';
import Loader from '../partials/Loader';
import './SinglePost.css';

class SinglePost extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSinglePost(id);
    }

    handleDelete(e) {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render() { 
        const { post, error } = this.props;
        return(
            <div id="wrapper">
                { !post
                    ?  <div>
                            <p id="error"> {error} </p>
                            <Loader />
                        </div>
                    : 
                    <div id="single-post-wrapper">
                        <h1> {post.title} </h1>
                        <p> 
                            { post.categories.split(" ").map((tag, i) => (tag.includes("#") ? <span key={i} className="hash-tag">tag</span> : <span key={i} className="hash-tag">#{tag}</span> ))} 
                        </p>
                        <p> {post.content} </p>
                        <button onClick={this.handleDelete} className="btn pink delete-btn"> Delete Post </button>
                    </div>
                }
            </div>
        );
    }
}
SinglePost.propTypes = {
    fetchSinglePost: PropTypes.func.isRequired,
    post: PropTypes.object,
    error: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
        post: state.post
    }
}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(SinglePost);