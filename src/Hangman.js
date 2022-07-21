import React, { Component } from 'react'
import './Hangman.css'
import img0 from './0.png'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'
import { randomWord } from './words'

class Hangman extends Component {
  static defaultProps = {
    images: [img0, img1, img2, img3, img4, img5, img6],
    maxWrong: 6,
  }
  constructor(props) {
    super(props)
    this.state = { nWrong: 0, gussed: new Set(), answer: randomWord() }
    this.handleGuess = this.handleGuess.bind(this)
    this.restart = this.restart.bind(this)
  }
  handleGuess(e) {
    let ltr = e.target.value
    this.setState((st) => ({
      gussed: st.gussed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }))
  }
  guessedWord() {
    return this.state.answer
      .split('')
      .map((ltr) => (this.state.gussed.has(ltr) ? ltr : '_'))
  }
  generateButtons() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.gussed.has(ltr)}
      >
        {ltr}
      </button>
    ))
  }

  restart() {
    this.setState({
      nWrong: 0,
      gussed: new Set(),
      answer: randomWord(),
    })
  }

  render() {
    let gameOver = this.state.nWrong >= this.props.maxWrong
    const altText = `${this.state.nWrong}/${this.props.maxWrong} zähler`
    const isWinner = this.guessedWord().join('') === this.state.answer
    let gameState = this.generateButtons()
    if (isWinner) gameState = 'Herzliche Glückwünsche! '
    if (gameOver) gameState = 'Leider wurde der Mensch hingerichtet:('
    return (
      <div className='Hangman'>
        <h2>Henker Spiel</h2>
        <div className='flex'>

          <div>
            <img src={this.props.images[this.state.nWrong]} alt={altText} />

          </div>

          <div>
            <p className='Hangman-wrong'>Falscher Vermutungen: {this.state.nWrong} </p>
            <p className='Hangman-word'>
              {!gameOver ? this.guessedWord() : this.state.answer}{' '}
            </p>
            <p className='Hangman-btns'>{gameState}</p>
            <button id='restart' onClick={this.restart}>
            ein neues Wort!
            </button>
          </div>

        </div>
      </div>
    )
  }
}

export default Hangman
