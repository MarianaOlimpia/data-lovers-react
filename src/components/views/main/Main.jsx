import React, {useEffect, useState} from 'react';
import './Main.css';
import Cards from '../../cards/Cards';
import NavBar from '../../NavBar/NavBar';
import { Grid } from '@material-ui/core';

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const [searchCharacter, setSearchCharacter] = useState();
    const getData = async () => {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
        const data = await response.json();
        const filterCharacters = data.filter(result => (result.biography.publisher === "Marvel Comics" || result.biography.publisher === "DC Comics"))
        setCharacters(filterCharacters);
    }
    
    useEffect(() => {
        getData()
    }, [])

    const selectedData = !searchCharacter 
    ? characters 
    : characters.filter(character => character.name.toLowerCase().includes(searchCharacter.toLowerCase()) || character.connections.groupAffiliation.toLowerCase().includes(searchCharacter.toLowerCase()) || character.biography.publisher === searchCharacter || character.biography.alignment === searchCharacter)
    
     return ( 
        <Grid direction='column' item container xs={12}>
            <NavBar characters={characters} setSearchCharacter={setSearchCharacter} />
            <Grid item container xs={12} spacing={2} justify='space-around' className='card-container'>
                {selectedData.map(character => (<Cards key={character.id} character={character} />))}
            </Grid>
        </Grid>
     );
}
 
export default Main;