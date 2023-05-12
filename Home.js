import React from 'react'
import Card from './Card'
import List from './Data'

const Home = ({handleClick}) => {
  return (
    <div className='home'>

    <section className='Homesec'>
        {List.map((item)=>(
            <div className='Cardsblock'>
                <Card key={item.id} item={item} handleClick={handleClick}/>

            </div>
        ))}
    </section>
      
    </div>
  )
}

export default Home
