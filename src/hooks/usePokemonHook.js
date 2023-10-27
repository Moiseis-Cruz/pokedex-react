import { useEffect, useState } from "react";

export const usePokemonHook = () => {
    const [pokemonData, setpokemonData] = useState([]);
    const [page, setPage] = useState(0);

    const fetchPokemonList = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`);
        const data = await response.json();
        return data.results;
    };

    const fetchPokemon = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    const fetchPokemonData = async () => {
        try {
            // Primeira requisição
            const pokemonList = await fetchPokemonList();

            const pokemonDataPromises = pokemonList.map((pokemon) =>
                fetchPokemon(pokemon.url)
            );

            const pokemonData = await Promise.all(pokemonDataPromises);
            console.log(pokemonData);

            setpokemonData(pokemonData);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error.message);
        }
    };

    useEffect(() => {
        fetchPokemonData();
        console.log(page)
    }, [page]);

    return {
        pokemonData, setPage, page
    }
}