const createComment = async (req, res) => {
    try {
        const { id, post_id, comment_content, user_id } = req.body;

        if (post_assets != '' && post_content != '' && user_id != '') {
            const addQuery = `INSERT INTO comments (id, post_id, comment_content, user_id) VALUES(
                '${id}',
                '${post_id}', 
                '${comment_content}',
                '${user_id}`;
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

const updateComment = async (req, res) => {
    try {
        const { id, post_id, comment_content, user_id } = req.body;

        if (post_assets != '' && post_content != '') {
            const addQuery = `
            UPDATE comments
            SET
                comment_content = '${comment_content}'
            WHERE id = '${id}' `;
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

const readComment = async (req, res) => {
    try {
        const selectQuery = "SELECT * FROM comments";
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
}

const deleteComment = async (req, res) => {
    try {
        const {id} = req.body;
        const selectQuery = `DELETE FROM comments WHERE id = '${id}';`;
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
}

module.exports = {createComment, updateComment, readComment, deleteComment}