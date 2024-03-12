'use client'

import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                onClick={handleVideoPlayer}
                className="text-color-primer float-right bg-color-accent px-3 mb-1 rounded-full">
                X
                </button>
                <Youtube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, please try another.")}/>
            </div>
        )
    }

    const ButtonOpen = () => {
        return (
            <button
            onClick={handleVideoPlayer}
            className="rounded fixed bottom-5 right-5 w-32 p-2 bg-color-accent text-color-primer font-bold">
            Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpen/>
}

export default VideoPlayer