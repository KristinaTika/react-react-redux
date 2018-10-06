import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewPost.css';
import { connect } from 'react-redux';
import { newPost } from '../action-creators/actionCreators'; 
import { Link } from 'react-router-dom';

class NewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            categories: "",
            content: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e) {
        if (e.target.name === "title" || e.target.name === "categories" || e.target.name === "content") {
            this.setState({ moveLabel: e.target.name });
        } else {
            this.setState({ moveLabel: "" });
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, categories, content } = this.state;
        const data = {
            title,
            categories,
            content
        }
        if (title === "" || categories === "" || content === "") {
            return;
        } else {
            this.props.newPost(data, () => {
                this.props.history.push("/");
            });
        }
    }

    render() {
        const { title, moveLabel, categories, content } = this.state;
        return (
            <div id="new-post-wrapper" onClick={this.handleClick}>
                <form>
                    <p> What is on your mind? </p>
                    <label 
                        htmlFor="title" 
                        className={moveLabel === "title" || title !== "" ? "label" : "static-label"}
                        >
                        Title
                    </label>
                    <input 
                        type="text" 
                        className="form-input" 
                        name="title" 
                        onChange={this.handleChange} 
                        id="title" 
                    />
                    <span className="error-input"> {title === "" ? "*Required" : ""}</span>
                    <label 
                        htmlFor="categories" 
                        className={moveLabel === "categories" || categories !== "" ? "label" : "static-label"}
                        >
                        Categories
                    </label>
                    <input 
                        type="text" 
                        className="form-input" 
                        name="categories" 
                        onChange={this.handleChange} 
                        id="categories" 
                    />
                     <span className="error-input"> {categories === "" ? "*Required" : ""}</span>
                    <label 
                        htmlFor="content" 
                        className={moveLabel === "content" || content !== "" ? "label" : "static-label"}
                        >
                        Content
                    </label>
                    <input 
                        type="text" 
                        className="form-input" 
                        name="content" 
                        onChange={this.handleChange} 
                        id="content" 
                    />
                    <span className="error-input"> {content === "" ? "*Required" : ""}</span>
                    <button onClick={this.handleSubmit} className="btn yellow"> Post </button>
                    <Link to="/posts" > <button className="btn pink">Cancel </button> </Link>
                </form>


            </div>
        );
    }
}
NewPost.propTypes = {
    newPost: PropTypes.func.isRequired,
}

export default connect(null, { newPost }) (NewPost);
