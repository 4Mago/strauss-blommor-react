import React, { useState, useEffect } from "react"
import "../the-big-file.css"
import { Link } from "react-router-dom"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"
import styled from "styled-components"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ImgContainer = styled.div`
  background: white;
  margin-top: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  text-decoration: none;

  @media screen and (max-width: 700px) {
    width: 100%;
    padding-right: 8px;
    padding-left: 8px;
  }

  @media screen and (max-width: 500px) {
  }
`

const NavLinks = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: black;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
  }

  @media screen and (max-width: 500px) {
  }
`

const Header = () => {
  const [header, setHeader] = useState("")

  useEffect(() => {
    const headerQuery = `*[_type == "header"]`

    sanityClient.fetch(headerQuery).then((header) => {
      header.forEach((header) => {
        setHeader(header)
      })
    })
    return
  }, [])

  return (
    <header>
      <ImgContainer>
        <Link to="/">
          <img alt="logo" src={urlFor(header.logo).url()} />
        </Link>
      </ImgContainer>
      <NavContainer>
        <NavLinks>
          {header.menu
            ? header.menu.map((item, id) => {
                return (
                  <Link
                    key={id}
                    className="menu-item"
                    to={`/${item
                      .replace(/å/g, "a")
                      .replace(/Å/g, "a")
                      .replace(/ä/g, "a")
                      .replace(/Ä/g, "a")
                      .replace(/ö/g, "o")
                      .replace(/Ö/g, "o")
                      .toLowerCase()}`}
                  >
                    {item}
                  </Link>
                )
              })
            : null}
        </NavLinks>
      </NavContainer>
    </header>
  )
}

export default Header
