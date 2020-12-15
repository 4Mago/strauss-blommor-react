import React from "react"
import styled from "styled-components"

const Figure = styled.div`
  background: transparent;
  position: inline;
  left: 0;
  bottom: 0;
  fill: #ffebec;
`
const Box = styled.div`
  width: 100%;
  height: 100%;
  height: auto;
  bottom: -5px;
  fill: #ffebec;
`

const SlopeFigure = () => {
  return (
    <Box>
      <Figure className="slope-figure-main">
        <svg
          width="100%"
          height="100%"
          className="svg-box"
          viewBox="0 0 1095 333"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="none"
            clipRule="none"
            d="M0 333.24C107.462 207.847 21.1534 0.23999 256.276 0.23999C491.395 0.23999 987.536 207.844 1095 333.232"
            fill="#FFEBEC"
          />
        </svg>
      </Figure>
    </Box>
  )
}

export default SlopeFigure
