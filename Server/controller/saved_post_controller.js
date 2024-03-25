const createSavedPost = async (req, res) => {
    try {
        const { id, saved_name, user_id, post_id } = req.body;

        if (post_assets != '' && post_content != '' && user_id != '') {
            const addQuery = `INSERT INTO saved_post (id, saved_name, user_id, post_id) VALUES(
                '${id}',
                '${saved_name}', 
                '${user_id}',
                ${post_id}`;
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
}

const updateSavedPost = async (req, res) => {
    try {
        const { id, saved_name, post_id } = req.body;

        if (post_assets != '' && post_content != '') {
            const addQuery = `
            UPDATE saved_post
            SET
                saved_name = '${saved_name}', 
                post_id = '${post_id}',
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
}

const readSavedPost = async (req, res) => {
    try {
        const selectQuery = "SELECT * FROM saved_post";
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
}

const deleteSavedPost = async (req, res) => {
    try {
        const {id} = req.body;
        const selectQuery = `DELETE FROM saved_post WHERE id = '${id}';`;
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
}

module.exports = {createSavedPost, updateSavedPost, readSavedPost, deleteSavedPost}