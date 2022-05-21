import React, { useState } from 'react'
import "../CSS/Card.css"
import TinderCard from 'react-tinder-card'
import { useEffect } from 'react'



function Card() {
    const [people,setPeople] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
          const res = await fetch('https://tinder-clone-backend-sadlerb.herokuapp.com/tinder/card');
          const result = await res.json();
        
        setPeople(result)

        }
    
        fetchData();

      },[])
    let  peopleCopy = people.slice(0)
    peopleCopy = peopleCopy.sort(() => Math.random() - 0.5)
    
    const swiped = (direction,nameToDelete) => {
        console.log("removing: " + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }

    const setLastDirection = () =>{
        console.log("Diretion")
    }

    return (
        <div className='tinderCards'>
            <div className='card--container'>
            {
                peopleCopy.map((person) => (
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe= {(direction) => swiped(direction,person.name)}
                    onCardLeftScreen= {() => outOfFrame(person.name)}>
                    <div style={{backgroundImage:`url(${person.imgUrl})`}}
                    className ="card">
                    <h3>{person.name}</h3>

                    </div>
                    
                    </TinderCard>
                    
                    ))}
            </div>

        </div>
  )
}

export default Card