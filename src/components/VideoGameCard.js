import React from 'react'

const VideoGameCard = ({ videoGame }) => (
    <article className="VideoGameCard">
        <h3 className="VideoGameCard__title">{videoGame.title}</h3>
        <h4 className="VideoGameCard__studio">{videoGame.studio}</h4>
        <small className="VideoGameCard__rating">{videoGame.rating}</small>
    </article>
)

export default VideoGameCard