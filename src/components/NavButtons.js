import React from 'react';
import styled from "styled-components";

export default class NavButtons extends React.Component {
  render() {
    return (
      <Container>
        <Link href="https://tsangela.github.io/" target="_blank" rel="noopener noreferrer">
          <Icon className="fas fa-user-astronaut fa-3x nav-btn"/>
        </Link>
        <Link href="https://github.com/tsangela/" target="_blank" rel="noopener noreferrer">
          <Icon className="fab fa-github fa-3x nav-btn"/>
        </Link>
        <Link href="https://github.com/tsangela/connect-four" target="_blank" rel="noopener noreferrer">
          <Icon className="fas fa-code-branch fa-3x nav-btn"/>
        </Link>
        <Link
          href="mailto:?subject=Play%20Connect%20Four%21&body=Check%20out%20this%20awesome%20online%20connect%20four%20game%3A%20https%3A//tsangela.github.io/connect-four/">
          <Icon className="fas fa-share-alt fa-3x nav-btn"/>
        </Link>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 20px;
`;

const Link = styled.a`
  color: peachpuff;
`;

const Icon = styled.i`
  transition: .3s ease;
  margin: 8px;
  color: peachpuff;

  &:hover {
      color: darksalmon;
  }
`;