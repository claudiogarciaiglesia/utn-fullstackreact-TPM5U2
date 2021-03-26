import React from 'react'

export const Imagen = (props) => {
    return (
        <div className="componente-imagen">
            <img src={props.img} alt={props.img} />
        </div>
    )
}
