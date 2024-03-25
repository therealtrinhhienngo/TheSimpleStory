const createPost = async (req, res) => {
    try {
        const { id, post_content, post_assets, post_liked, user_id, create_at } = req.body;

        if (post_assets != '' && post_content != '' && user_id != '') {
            const addQuery = `INSERT INTO post (id, post_content, post_assets, post_liked, user_id, create_at) VALUES(
                '${id}',
                '${post_content}', 
                '${post_assets}',
                ${post_liked},
                '${user_id}',
                ${create_at})`;
            mysqlConnection.query(addQuery, function (err, result, fields) {
                if (err) throw err;
                res.send(result)
                console.log('Add Complete!');
            });
        }
        else {

        }
    } catch (error) {
        console.log('Error: ' + error);
    }
};

const updatePost = async (req, res) => {
    try {
        const { id, post_content, post_assets } = req.body;

        if (post_assets != '' && post_content != '') {
            const addQuery = `
            UPDATE posts
            SET
                post_content = '${post_content}', 
                post_assets = '${post_assets}',
            WHERE id = '${id}'`;
            mysqlConnection.query(addQuery, function (err, result, fields) {
                if (err) throw err;
                res.send(result)
                console.log('Update Complete!');
            });
        }
        else {

        }
    } catch (error) {
        console.log('Error: ' + error);
    }
};

const updateLikedPost = async (req, res) => {
    try {
        const { id, post_liked } = req.body;

        if (post_liked != null) {
            const addQuery = `
            UPDATE posts
            SET
                post_liked = ${post_liked}
            WHERE id = '${id}'`;
            mysqlConnection.query(addQuery, function (err, result, fields) {
                if (err) throw err;
                res.send(result)
                console.log('Update Complete!');
            });
        }
        else {

        }
    } catch (error) {
        console.log('Error: ' + error);
    }
};

const deletePost = async (req, res) => {
    try {
        const {id} = req.body;
        const selectQuery = `DELETE FROM posts WHERE id = '${id}';`;
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
};

const readPost = async (req, res) => {
    try {
        const selectQuery = "SELECT * FROM posts";
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
};

module.exports = {createPost, updateLikedPost, updatePost, readPost, deletePost}