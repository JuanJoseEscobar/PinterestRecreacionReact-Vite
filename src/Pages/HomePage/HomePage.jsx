import styled from 'styled-components';
import { Header, GriCards, CreatePin } from './components';

export const HomePage = () => {
  return (
    <Body>
        <Header/>
        <CreatePin/>
    </Body>
  )
}

const Body = styled.div`
    background-color: #ffffff;
`;
