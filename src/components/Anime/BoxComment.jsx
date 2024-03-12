import React from 'react';
import prisma from '@/libs/prisma';
import Image from 'next/image';

const CommentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mb-4">
            {comments.map(comment => (
                <div key={comment.id} className="flex items-center text-color-dark bg-color-primer p-4 rounded border-2 border-color-dark">
                    <div className="mr-2">
                        <Image src={comment.user_image} alt="..." width={40} height={40}
                         className="border-2 border-color-accent rounded-full" />
                    </div>
                    <div>
                        <p className="font-bold">@{comment.username}</p>
                        <p className="text-sm">{comment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentBox;
