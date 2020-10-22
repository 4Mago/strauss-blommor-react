import React, {useState, useEffect} from 'react'
import '../components/the-big-file.css'
import { Link } from 'react-router-dom'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}


const Header = () => {

  const [header, setHeader] = useState('')

  useEffect(() => {
      const headerQuery = `*[_type == "header"]`

      sanityClient.fetch(headerQuery).then(header => {  
         header.forEach(header => {
           setHeader(header)
         })
      })
      return
  }, [])
  
return (
  <header>
  <div className='header-logo'>
    <Link to="/">
    <img alt="logo" src={urlFor(header.logo).url()} />
    </Link>

   
        </div>
    <div className='nav-container'>
      <div className='nav-links'>
      
      {header.menu ? header.menu.map((item, id) => {
        return (  <Link key={id} className='menu-item' to={`/${item.toLowerCase()}`}>{item}</Link>)
      }) : null}

      </div>
    </div>
</header>

)
 

}
 

export default Header