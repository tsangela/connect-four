import React from 'react';
import styled from "styled-components";

export default class RestartButton extends React.Component {
    render() {
        return (
            <Button>
                <a href=".">
                    Restart game
                </a>
            </Button>
        );
    }
}

const Button = styled.div`
  a {
    padding: 10px;
    border-radius: 5px;
    border: 1px black solid;
    -webkit-transition: ease 0.3s;
    -moz-transition: ease 0.3s;
    -ms-transition: ease 0.3s;
    -o-transition: ease 0.3s;
    transition: ease 0.3s;
    text-decoration: none;
    
    &:visited {
      color: black;
    }
    
    &:hover {
      color: white;
      background: black;
      border: 1px black solid;
      font-style: italic;
    }
  }
`;