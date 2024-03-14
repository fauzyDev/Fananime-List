'use client'

import { useState, useEffect } from 'react';
import prisma from '@/libs/prisma';
import Image from 'next/image';

const CommentBox = ({ anime_mal_id }) => {
    const [comments, setComments] = useState([]);

    // Function to fetch comments
    const fetchComments = async () => {
        const fetchedComments = await prisma.comment.findMany({ where: { anime_mal_id } });
        setComments(fetchedComments);
    };

    // Function to delete a comment
    const deleteComment = async (commentId) => {
        await prisma.comment.delete({ where: { id: commentId } });
        fetchComments(); // Fetch comments again after deletion
    };

    // Function to update a comment
    const updateComment = async (commentId, newComment) => {
        await prisma.comment.update({ where: { id: commentId }, data: { comment: newComment } });
        fetchComments(); // Fetch comments again after update
    };

    // Fetch comments on component mount
    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
            {comments.map(comment => (
                <div key={comment.id} className="flex items-center text-color-dark bg-color-primer p-4 rounded border-2 border-color-dark">
                    <div className="mr-2">
                        <Image src={comment.user_image} alt="..." width={40} height={40} className="border-2 border-color-accent rounded-full" />
                    </div>
                    <div>
                        <p className="font-bold">@{comment.username}</p>
                        <p>{comment.comment}</p>
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        <button onClick={() => {
                            const newComment = prompt('Enter new comment', comment.comment);
                            if (newComment !== null) {
                                updateComment(comment.id, newComment);
                            }
                        }}>Edit</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentBox