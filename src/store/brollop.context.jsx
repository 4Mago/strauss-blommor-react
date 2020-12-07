import React, { createContext, useEffect, useState} from 'react'
import sanityClient from '../Client'

export const BrollopContext = createContext()

const BrollopContextProvider = (props) => {
    const [brollop, setBrollop] = useState('')

    useEffect(() => {
        const brollopQuery = `*[type == "brollop"]`
        sanityClient.fetch(brollopQuery).then(brollop => {
           setBrollop(brollop)
        })
        return
    }, [])


    return (
        <BrollopContext.Provider value={{brollop}}>
            {props.children}
        </BrollopContext.Provider>

    )
}

export default BrollopContextProvider
