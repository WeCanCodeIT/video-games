import React from 'react'

class AddVideoGame extends React.Component {

    constructor() {
        super()
        this.state = {
            rating: 0,
            studio: "",
            title: ""
        }

        // I hate this and you should too
        // this.updateTitle = this.updateTitle.bind(this)
    }

    addVideoGameFetch = (event) => {
        event.preventDefault()

        fetch('http://localhost:8080/api/video-games', {
            method: "POST",
            body: JSON.stringify({
                title: this.state.title,
                studio: this.state.studio,
                rating: this.state.rating
            })
        })
            .then(res => res.json())
            .then(videoGames => this.props.addVideoGame(videoGames))
    }

    updateRating = (event) => {
        this.setState({ rating: event.target.value })
    }

    updateStudio = (event) => {
        this.setState({ studio: event.target.value })
    }

    updateTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.addVideoGameFetch}>
                <input type="text" placeholder="Add Title" onChange={this.updateTitle} />
                <input type="text" placeholder="Add Studio" onChange={this.updateStudio} />
                <input type="number" placeholder="Add Rating" onChange={this.updateRating} />
                <button>Add Game</button>
            </form>
        )
    }
}

export default AddVideoGame