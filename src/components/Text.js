import React from "react"

const Text = ({ markdownText }) => {
  return (
    <>
      {markdownText.split("\n").map((i, key) => {
        return <p key={key}>{i}</p>
      })}
    </>
  )
}

export default Text
