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

exports.deleteComment = async (movieId,comment,username) => {
    const comments = await this.findComments(movieId)
    const oneComment = comments.find((c) => c.comment == comment && c.username == username)

    if(oneComment) {
        const deleteComment = await Comment.findByIdAndDelete(oneComment._id)
        return deleteComment
    }
    else {
        throw new Error('No such comment exists!')
    }
}