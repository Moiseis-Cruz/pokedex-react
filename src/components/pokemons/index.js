import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme-context/theme-context";
import { usePokemonHook } from "../../hooks/usePokemonHook";

export const ListCards = () => {
    const { pokemonData, setPage, page } = usePokemonHook()
    const { theme } = useContext(ThemeContext)

    return (
        <Main style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
            <ul>
                {
                    pokemonData && pokemonData.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.sprites.front_shiny
                                } alt={item.name} />
                                <h2>{item.name}</h2>
                                <div className="types">{item.types.map((item) => (
                                    <p className={item.type.name}>{item.type.name}</p>
                                ))}</div>
                            </div>
                        )
                    })
                }
            </ul>

            <Pagination>
                {page >= 1 && <button onClick={() => setPage(page - 20)}>ANTERIOR</button>}
                <button onClick={() => setPage(page + 20)}>PROX</button>
            </Pagination>

        </Main>
    )
}

const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin: 0 auto;
    justify-content: center;

    button {
        background-color: antiquewhite;
        color: black;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
    }
`
const Main = styled.main`
    max-width: 1440px;
    width: 100%;
    background-color: pink;
    margin: auto;
    padding-bottom: 30px;
    
    .types {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .types p {
        padding: 5px;
        border-radius: 5px;
    }

    .fire {
        color: red;
    }

    .water {
        color: blue;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    ul > div {
        padding: 20px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    /* Fogo */
    .fire {
    color: white;
    background-color: #FF4500; /* Laranja escuro */
    }

    /* Água */
    .water {
    color: white;
    background-color: #0077BE; /* Azul-claro */
    }

    /* Grama */
    .grass {
    color: white;
    background-color: #4CAF50; /* Verde */
    }

    /* Elétrico */
    .electric {
    color: black;
    background-color: #FFD700; /* Amarelo */
    }

    /* Gelo */
    .ice {
    color: black;
    background-color: #87CEEB; /* Azul-claro */
    }

    /* Lutador */
    .fighting {
    color: white;
    background-color: #A0522D; /* Marrom */
    }

    /* Veneno */
    .poison {
    color: white;
    background-color: #800080; /* Roxo */
    }

    /* Terra */
    .ground {
    color: black;
    background-color: #8B4513; /* Marrom-escuro */
    }

    /* Voador */
    .flying {
    color: black;
    background-color: #87CEEB; /* Azul-claro */
    }

    /* Psíquico */
    .psychic {
    color: white;
    background-color: #FF1493; /* Rosa */
    }

    .normal {
        background-color: #A9A9A9; /* Cinza */
    }

    /* Inseto */
    .bug {
    color: black;
    background-color: #32CD32; /* Verde-claro */
    }

    /* Pedra */
    .rock {
    color: white;
    background-color: #A9A9A9; /* Cinza */
    }

    /* Fantasma */
    .ghost {
    color: white;
    background-color: #4B0082; /* Indigo escuro */
    }

    /* Aço */
    .steel {
    color: black;
    background-color: #A9A9A9; /* Cinza */
    }

    /* Dragão */
    .dragon {
    color: white;
    background-color: #4169E1; /* Azul */
    }

    /* Sombrio */
    .dark {
    color: white;
    background-color: #2F4F4F; /* Cinza-escuro */
    }

    /* Fada */
    .fairy {
    color: black;
    background-color: #EE82EE; /* Violeta */
    }

`