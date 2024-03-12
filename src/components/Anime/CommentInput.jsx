'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title, user_image }) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const router = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, comment, username, anime_title, user_image }

        const response = await fetch("/api/internal/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if (postComment.isCreated) {
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
        return
    }

    return (
        <div className="flex flex-col gap-2">
        <p className="font-bold text-xl mb-2">Tulis Komentar</p>
            <textarea onChange={handleInput} 
            value={comment}
            className="w-full h-32 text-xl p-2 text-color-dark border-2 border-color-dark rounded"/>
            <button onClick={handlePosting} className="w-52 py-2 px-3 bg-color-accent rounded">
            Posting Komentar
            </button>
        </div>
    );
};

export default CommentInput