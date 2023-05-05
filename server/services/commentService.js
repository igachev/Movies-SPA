const Comment = require('../models/Comment.js')

exports.add = async (movieId,comment,username) => {
    const addComment = new Comment({
        comment,
        movieId,
        username
      });
      await addComment.save();
      return addComment
}

exports.findComments = async (movieId) => {
    const comments = await Comment.find({movieId})
    return comments
}