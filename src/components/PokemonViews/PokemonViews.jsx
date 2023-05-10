import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PokemonForm from "components/PokemonForm/PokemonForm";
import PokemonInfo from "components/PokemonInfo/PokemonInfo";

export default function PokemonViews() {
    const [pokemonName, setPokemonName] = useState('');
    
    return(
        <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20}}>
            <PokemonForm onSubmit={setPokemonName}/>
            <PokemonInfo pokemonName={pokemonName}/>
            <ToastContainer autoClose={3000}/>
        </div>
      );
    
  };