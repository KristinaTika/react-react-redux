import { url, apiKey } from "../../shared/constants";
import axios from 'axios';
import { Post } from '../../entities/Post';

export const FETCH_POSTS = 'FETCH_POSTS';
export const HANDLE_ERROR = 'HANDLE_ERROR';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const NEW_POST = 'NEW_POST';
export const DELETE_POST = 'DELETE_POST';

const handlePosts = (posts) => {

    let myPosts = posts.map(post => new Post(post.id, post.title, post.categories, post.content));
    return {
        type: FETCH_POSTS,
        posts: myPosts
    }
}

const handleErrors = (error) => {
    console.log(error);
    return {
        type: HANDLE_ERROR,
        error
    }
}

export const fetchPosts = () => {
    return dispatch => {
        return axios.get(`${url}${apiKey}`)
            .then( res => dispatch(handlePosts(res.data)))
            .catch( err => dispatch(handleErrors(err.message)));
    }
}

const handleSinglePost = (post) => {
    let myPost = {...post};
    return {
        type: FETCH_SINGLE_POST,
        post: myPost
    }
}

export const fetchSinglePost = (id) => {
    return dispatch => {
        return axios.get(`${url}/${id}${apiKey}`)
            .then(res => dispatch(handleSinglePost(res.data)))
            .catch(err => dispatch(handleErrors(err.message)));
    }
}

const handleNewPost = (res) => {
    return {
        type: NEW_POST,
        res
    }
}

export const newPost = (data, callback) => {
    return dispatch => {
        return axios.post(`${url}${apiKey}`, data)
            .then(res => dispatch(handleNewPost(res.data)))
            .then(res => callback())
            .catch(err => dispatch(handleErrors(err.message)));
    }
}

const handleDeletedPost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}

export const deletePost = (id, callback) => {
    return dispatch => {
        return axios.delete(`${url}/${id}${apiKey}`)
            .then(res => dispatch(handleDeletedPost(id)))
            .then(res => callback())
            .catch(err => dispatch(handleErrors(err.message)));
    }
}