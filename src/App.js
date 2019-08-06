import React, { useEffect, useState } from 'react';

import './App.css';

import AddVideoGame from './components/AddVideoGame'
import Layout from './components/Layout'
import VideoGameList from './components/VideoGameList'

const App = () => {

    const [videoGames, setVideoGames] = useState([])
    const [title, setTitle] = useState('Video Games!!!')

    const addVideoGame = (videoGameCollection) => {
        setVideoGames(videoGameCollection)
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/video-games')
            .then(res => res.json())
            .then(videoGames => setVideoGames(videoGames))
    }, [])

    return (
        <div className="App">
            <Layout title={title}>
                <VideoGameList videoGames={videoGames} />
                <AddVideoGame addVideoGame={addVideoGame} />
            </Layout>
        </div>
    )
}

export default App;
