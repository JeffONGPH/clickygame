import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Blastoise',
        img: 'img/characters/blastoise.jpg',
        clicked: false
    },
    {
        name: 'Charizard',
        img: 'img/characters/charizard.jpg',
        clicked: false
    },
    {
        name: 'Crobat',
        img: 'img/characters/crobat.jpg',
        clicked: false
    },
    {
        name: 'Gengar',
        img: 'img/characters/gengar.jpg',
        clicked: false
    },
    {
        name: 'Snorlax',
        img: 'img/characters/snorlax.jpg',
        clicked: false
    },
    {
        name: 'Venusaur',
        img: 'img/characters/venusaur.jpg',
        clicked: false
    },
    {
        name: 'Houndoom',
        img: 'img/characters/houndoom.jpg',
        clicked: false
    },
    {
        name: 'Tyranitar',
        img: 'img/characters/tyranitar.jpg',
        clicked: false
    },
 
    {
        name: 'Sceptile',
        img: 'img/characters/sceptile.jpg',
        clicked: false
    },
    {
        name: 'Heracross',
        img: 'img/characters/heracross.jpg',
        clicked: false
    },
    {
        name: 'Scizor',
        img: 'img/characters/scizor.jpg',
        clicked: false
    },
    {
        name: 'Rhyperior',
        img: 'img/characters/rhyperior.jpg',
        clicked: false
    },
    {
        name: 'Swampert',
        img: 'img/characters/swampert.jpg',
        clicked: false
    },
    {
        name: 'Raichu',
        img: 'img/characters/raichu.jpg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h3>Click Image to begin. Score Resets to Zero if Image clicked more than once!</h3>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}