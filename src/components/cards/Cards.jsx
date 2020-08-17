import React from 'react';
import './Cards.css';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import Modal from '../ModalComponent/Modal';

const Cards = ({character}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                className='character-image'
                image={character.images.sm}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{character.name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{character.biography.publisher}</Typography>
                    <Typography className="sub-info" variant="body2" color="textSecondary" component="p">{character.connections.groupAffiliation}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Modal character={character} />
            </CardActions>
        </Card>
         );
}
 
export default Cards;