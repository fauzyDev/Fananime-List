import { useState } from 'react';
import prisma from '@/libs/prisma';
import Image from 'next/image';

const CommentBox = async ({ anime_mal_id }) => {
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedComment, setEditedComment] = useState('');

    const [deletingCommentId, setDeletingCommentId] = useState(null);

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const fetchedComments = await prisma.comment.findMany({ where: { anime_mal_id } });
        setComments(fetchedComments);
    };

        useEffect(() => {
        fetchComments();
    }, []);

    const deleteComment = async (commentId) => {
        try {
            await prisma.comment.delete({
                where: {
                    id: commentId
                }
            });
            // Refresh comments after delete
            await fetchComments();
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const editComment = async (commentId) => {
        try {
            await prisma.comment.update({
                where: {
                    id: commentId
                },
                data: {
                    comment: editedComment
                }
            });
            // Reset edit mode after editing
            setEditingCommentId(null);
            setEditedComment('');
            // Refresh comments after edit
            await fetchComments();
        } catch (error) {
            console.error('Error editing comment:', error);
        }
    };

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
            {comments.map(comment => (
                <div key={comment.id} className="flex items-center text-color-dark bg-color-primer p-4 rounded border-2 border-color-dark">
                    <div className="mr-2">
                        <Image src={comment.user_image} alt="..." width={40} height={40}
                         className="border-2 border-color-accent rounded-full" />
                    </div>
                    <div>
                        <p className="font-bold">@{comment.username}</p>
                        {editingCommentId === comment.id ? (
                            <div>
                                <textarea value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
                                <button onClick={() => editComment(comment.id)}>Save</button>
                            </div>
                        ) : (
                            <p>{comment.comment}</p>
                        )}
                    </div>
                    <div className="ml-auto">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id={`dropdownMenuButton-${comment.id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${comment.id}`}>
                                <button className="dropdown-item" onClick={() => setEditingCommentId(comment.id)}>Edit</button>
                                <button className="dropdown-item" onClick={() => setDeletingCommentId(comment.id)}>Delete</button>
                            </div>
                        </div>
                        {deletingCommentId === comment.id && (
                            <div>
                                <p>Are you sure you want to delete this comment?</p>
                                <button onClick={() => deleteComment(comment.id)}>Yes</button>
                                <button onClick={() => setDeletingCommentId(null)}>No</button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentBox