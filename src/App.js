import React from 'react';
import { Card } from './Card';
import datos from './datos';

export default function App() {

  return (
    <div className="App">
      {datos.map((dato, index) => {
        return (
          <Card
            key={index}
            img={dato.url}
            title={dato.title}
            desc={dato.description}
          />
        )
      })}
    </div>
  )
}