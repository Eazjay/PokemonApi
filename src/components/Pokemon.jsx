import React, {useState} from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const fetchPokemon = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }

        return (
            <div className="container mt-3">
                <button onClick={fetchPokemon} className="btn btn-primary ">Fetch Pokemon</button>
                <div className="mt-5">
                    {pokemon.length > 0 && pokemon.map((pokemon, index) =>{
                        return (
                            <div key={index}>
                                <h6>{pokemon.name}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}

export default Pokemon;