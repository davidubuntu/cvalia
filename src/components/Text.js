import React from "react"
import styled from "styled-components"
const Paragraph = styled.p`
  margin:0rem 0 1rem 0;
`
const Text = ({ markdownText }) => {
  return (
    <>
      {markdownText.split("\n").map((i, key) => {
        return <Paragraph key={key}>{i}</Paragraph>
      })}
    </>
  )
}

export default Text
