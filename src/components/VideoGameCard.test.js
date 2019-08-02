
import React from 'react'
import ReactDOM from 'react-dom'

import VideoGameCard from './VideoGameCard'

const videoGame = {
    studio: 'Nintendo',
    title: 'Breath of the Wild'
}

describe('VideoGameCard component', () => {
    let entryPoint

    beforeEach(() => {
        entryPoint = document.createElement('div')
        ReactDOM.render(<VideoGameCard videoGame={videoGame} />, entryPoint)
    })

    test('renders', () => {
        expect(entryPoint.querySelector('.VideoGameCard') instanceof HTMLElement).toBeTruthy()
    })

    test('renders an "h3" element with the passed video game title', () => {
        expect(entryPoint.querySelector('.VideoGameCard__title').tagName).toMatch('H3')
        expect(entryPoint.querySelector('.VideoGameCard__title').textContent).toMatch('Breath of the Wild')
    })

    test('renders an "h4" element with the passed video game studio', () => {
        expect(entryPoint.querySelector('.VideoGameCard__studio').tagName).toMatch('H4')
        expect(entryPoint.querySelector('.VideoGameCard__studio').textContent).toMatch('Nintendo')
    })
})