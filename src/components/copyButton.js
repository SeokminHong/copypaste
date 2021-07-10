import React, { useState } from "react"
import copy from "copy-to-clipboard"

import "./copyButton.css"

const LINK = "https://copy-paste.netlify.app"

const CopyButton = ({ defaultText }) => {
  const [text, setText] = useState(defaultText)
  return (
    <div className="input-area">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.currentTarget.value)}
        placeholder="Text to copy"
      />
      <button
        aria-label="Copy"
        className="copy-button"
        onClick={() => {
          copy(text)
          alert(`Copied!\n${text}`)
        }}
      >
        Copy
      </button>
      <button
        aria-label="Share"
        className="share-button"
        onClick={() => {
          copy(encodeURI(`${LINK}?q=${text}`))
          alert(`Share link copied!`)
        }}
      >
        Share
      </button>
    </div>
  )
}

export default CopyButton
