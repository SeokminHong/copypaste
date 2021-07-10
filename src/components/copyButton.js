import React, { useState } from "react"
import copy from "copy-to-clipboard"

import "./copyButton.css"

const LINK =
  process.env.NODE_ENV === "development" ? "http://localhost:8000" : ""

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
          copy(`${LINK}?q=${text}`)
          alert(`Share link copied!`)
        }}
      >
        Share
      </button>
    </div>
  )
}

export default CopyButton
