import React from 'react'

import VideoGameCard from './VideoGameCard'

const VideoGameList = ({ videoGames }) => {

    return (
        <ul className="VideoGameList">
            {videoGames.map(videoGame => <li><VideoGameCard videoGame={videoGame} /></li>)}
        </ul>
    )
}

export default VideoGameList