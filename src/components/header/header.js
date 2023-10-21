import styled from "styled-components";
import { Button } from "../button/button";
import { ThemeContext } from "../../theme-context/theme-context";

import ImgLogo from "../imgs/logo-pokemon.png";
import { useContext } from "react";

export const HeaderPokemon = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <Header style={{backgroundColor: theme.backgroundColor}}>
      <PokeLogo src={ImgLogo} />
      <Button></Button>
    </Header>
  );
};

const Header = styled.header`
  background-color: red;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  height: 80px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
;

const PokeLogo = styled.img`
    height: 60px;
    width: auto;
`