import React from "react"
import styled from "styled-components"

const ProgressBar = props => {
  const { bgcolor, completed, width } = props
  const progressBarWith = `${width}%`
  const completedWidth = `${completed}%`
  const ProgressBarContainer = styled.div`
    width: ${props => props.width || "auto"};
    height: 5px;
    background-color: #e0e0de;
    border-radius: 50px;
    }
  `

  const Filter = styled.div`
    height: 100%;
    width: ${props => props.width};
    background-color: ${props => props.bgcolor || "#e0e0de"};
    transition: width 3s ease-in-out;
    border-radius: inherit;
    text-align: right;
  `

  const CircleSpan = styled.span`
    padding: 5px;
    color: white;
    height: 1.3rem;
    width: 1.3rem;
    background-color: #ebbea8;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    top: -10px;
    right: -10px;
  `

  return (
    <ProgressBarContainer width={progressBarWith}>
      <Filter width={completedWidth} bgcolor={bgcolor}>
        <CircleSpan></CircleSpan>
      </Filter>
    </ProgressBarContainer>
  )
}

export default ProgressBar
