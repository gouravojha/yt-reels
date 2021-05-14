import React from 'react'
import "./VideoCard.css"
function VideoCard({reels}) {
    return (
        <div>
            <iframe
                className="video"
                title="food"
                src={reels}
                frameborder="0"
            />
        </div>
    )
}

export default VideoCard 
