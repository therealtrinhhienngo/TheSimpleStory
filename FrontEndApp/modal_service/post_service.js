const { default: axios } = require("axios");
const { ApiPostAddress } = require("../config/api_config");
const { ApiAddress } = require("../config/api_config");

// Create post function
const createPostFunction = ({ id, post_content, post_assets, post_liked, user_id, create_at }) => {
    try {
        axios({
            method: 'get',
            url: `${ApiPostAddress}/read`,
            body: {}
        }).then((response) => {
            console.log(response.data);
        });
    } catch (error) {
        console.log("Add Post Error: " + error);
    }
}

// Update post function
const updatePostFunction = () => {

}

// Get post function
const getPostFunction = () => {

}

// Get post user's only function
const getUserPostFunction = () => {

}

// Update liked post function
const updateLikedPostFunction = () => {

}

// Delete post function
const deletePostFunction = () => {

}

module.exports = { createPostFunction, getPostFunction, getUserPostFunction, updateLikedPostFunction, updatePostFunction, deletePostFunction }