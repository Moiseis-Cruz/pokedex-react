import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme-context/theme-context";

async function pokemonList() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const pokemons = await response.json()
    return pokemons.results
}

export const ListCards = () => {
    const [list, setList] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const pokeId = await pokemonList()
            
            setList(pokeId)
        }
        
        fetchData()
    },[])

    const { theme } = useContext(ThemeContext)

    return(
        <Main style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
            <ul>
                {
                    list.map((item, index) => {
                        return(
                            <div key={index}>
                                <img src={item.url} alt={item.name} />
                                <h2>{item.name}</h2>
                            </div>
                        )
                    })
                }
            </ul>
        </Main>
    )
}

const Main = styled.main`
    max-width: 1440px;
    width: 100%;
    background-color: pink;
    margin: auto;
`

/* 
.
.name
.moves[0].move.name
.abilities[0].ability.name
.abilities[1].ability.name
.types[0].type.name
*/

/* 
list.data.map((item, index) => {
    return(
        <li>
        <div key={index}>
        <h2>{item.moves[0].move.name}</h2>
        </div>
        </li>
        )
    })
    */

    /*

    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index+1}.png

    */