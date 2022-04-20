import React, { useEffect, useState } from 'react'

const Home = () => {

    const [x , setX] : any = useState(0)
    const [y , setY] : any = useState(0)
    const [answer, setAnswer] = useState(0)

    

    useEffect(() => {
        const handleAdd = () : void => {

            let w = x + y
            let z = w as number
            // setAnswer(z)
            console.log(typeof z)
        }
        handleAdd()
    }, [x, y])
  return (
    <div>
        Home
        <input type="number" onChange={e => setX(e.target.value)} id="" /> +
        <input type="text" onChange={e => setY(e.target.value)} name="" id="" /> = 
        <h3>{answer}</h3>
    </div>
  )
}

export default Home