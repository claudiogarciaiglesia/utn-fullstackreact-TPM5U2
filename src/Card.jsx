import React from 'react'
import { Description } from './Description'
import { Imagen } from './Imagen'
import { Title } from './Title'
import './Card.css';

export const Card = (props) => {
    const { img, title, desc } = props;

    return (
        <div className="card">
            <div className="columna-imagen">
                <Imagen img={img} />
            </div>
            <div className="columna-titulo-descripcion">
                <Title title={title} />
                <Description desc={desc} />
            </div>
        </div>
    )
}
