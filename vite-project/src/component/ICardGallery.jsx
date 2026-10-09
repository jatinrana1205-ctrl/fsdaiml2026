import React from 'react'
import ICard from './ICard'
import jatin from '../assets/images/jatin.jpeg';
function ICardGallery() {
  return (
    <div>
    <ICard pic={jatin} roll="0093" name="Jatin" branch="CSE-AIML"/>
    <br></br>
    <ICard pic={jatin} roll="0094" name="Rahul" branch="CSE-AIML"/>
    <br></br>
    <ICard pic={jatin} roll="0095" name="Paras" branch="CSE-AIML"/>
    
    </div>
  )
}

export default ICardGallery