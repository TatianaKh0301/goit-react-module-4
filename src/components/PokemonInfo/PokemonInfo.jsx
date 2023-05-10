import { useState, useEffect } from "react";

export default function PokemonInfo({pokemonName}) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
   
    useEffect(() => {
        if(!pokemonName) {return;}
        setPokemon(null);
        setError(null);
        setTimeout(setLoading(true), 10000);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                return Promise.reject(new Error(`There are no pokemon with name ${pokemonName}`))
            })
            .then(
                pokemon => {
                    setPokemon(pokemon);
                    setLoading(false)
                }

            )
            .catch(error => setError(error))
            .finally(setLoading(false));
        }, [pokemonName]);
    return(
        <div>
            <h1>PokemonInfo</h1>
            {!pokemonName && <div>Write pokemon's name</div>}
            {error && <div>{error.message}</div>}
            {loading && <div>Loading...</div>}
            {pokemon && 
                <div>
                    <p>{pokemon.name}</p>
                    <img 
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt={pokemon.name}
                        width="240"
                    />
                </div>
            }
        </div>
    );
}