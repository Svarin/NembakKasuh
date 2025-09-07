import { useState } from 'react'
import './App.css'

function App() {
  const [noCount, setNoCount] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const messages = [
    "Mau jadi kasuh kami gak?",
    "Yakin gak mau jadi kasuh? 🥺",
    "YAKIN KAU BUNG???!!!!",
    "Kok gak mau sih? pls banget jadi kasuh yuk!",
    "Masa iya gak mau? Kasuh please! 🙏",
    "Udah lah, gak usah pikir panjang kaaa",
    "Tombol YES-nya udah gede banget tuh!",
    "Okay fine, tapi tombol YES makin gede lho!",
    "Serius nih masih gak mau jadi kasuh? 😭",
    "Udah lah, menyerah aja... JADI KASUH! 🤪"
  ]

  const noButtonTexts = [
    "Gak!",
    "Gak ah",
    "Ogah",
    "Enggak",
    "Gak mau",
    "Nope",
    "Jangan",
    "Gak deh",
    "Malas",
    "STOP!"
  ]

  const getCurrentMessage = () => {
    if (noCount >= messages.length) {
      return messages[messages.length - 1]
    }
    return messages[noCount]
  }

  const getCurrentNoText = () => {
    if (noCount >= noButtonTexts.length) {
      return noButtonTexts[noButtonTexts.length - 1]
    }
    return noButtonTexts[noCount]
  }

  const handleNoClick = () => {
    setNoCount(prev => prev + 1)
  }

  const handleYesClick = () => {
    setShowResult(true)
  }

  const getYesButtonStyle = () => {
    const scale = 1 + (noCount * 0.3)
    return {
      transform: `scale(${scale})`,
      fontSize: `${1 + (noCount * 0.2)}rem`
    }
  }

  if (showResult) {
    return (
      <div className="app">
        <div className="container result-container">
          <h1 className="result-title">Yeayyyy! 🎉</h1>
          <p className="result-message">
            Makasih udah mau jadi kasuh! 
          </p>
          <div className="celebration">
            <span className="emoji">🎊</span>
            <span className="emoji">🎉</span>
            <span className="emoji">🥳</span>
            <span className="emoji">💖</span>
            <span className="emoji">🎊</span>
          </div>
          <button 
            className="reset-button"
            onClick={() => {
              setShowResult(false)
              setNoCount(0)
            }}
          >
            Mulai Lagi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1 className="title">Halo Bung Arqila!</h1>
          <p className="question">{getCurrentMessage()}</p>
        </div>

        <div className="buttons-container">
          <button 
            className="yes-button"
            style={getYesButtonStyle()}
            onClick={handleYesClick}
          >
            IYA DONG! 
          </button>
          
          <button 
            className="no-button"
            onClick={handleNoClick}
          >
            {getCurrentNoText()}
          </button>
        </div>

        {noCount > 0 && (
          <div className="hint">
            <p className="hint-text">
              kiw kiw gausah malu malu kali 👀
            </p>
          </div>
        )}

        {noCount > 5 && (
          <div className="desperate-message">
            <p>Udah {noCount} kali bilang gak mau! 😤</p>
            <p>Lihat tuh tombol YES-nya udah kayak raksasa! 👹</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App