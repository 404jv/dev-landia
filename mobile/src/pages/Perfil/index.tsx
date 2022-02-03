import React from 'react';
import { Image } from 'react-native';
import { PerfilCoins } from '../../components/PerfilCoins';

import { 
    Container, 
    Header,
    HeaderText,
    Icon,
    PerfilInfo,
    PerfilImageContainer,
    PerfilImage,
    PerfilEdit,
    PerfilEditIcon,
    PerfilContent,
    UserName,
    UserId,
    UserDescription,
    PerfilCoinsView,
    CoinStats,
    CoinView,
} from './styles';


export function Perfil(){

    return(
        <Container>
            <Header>
                <Icon name="user"/>
                <HeaderText>Perfil</HeaderText>
            </Header>

            <PerfilInfo>
                <PerfilImageContainer>
                    <PerfilImage 
                        source={
                            {uri: 'https://i.pinimg.com/564x/82/69/ba/8269ba31e93f37b3d711dd544cce7a30.jpg'}
                        }
                    />

                    <PerfilEdit>
                        <PerfilEditIcon name="edit"/>
                    </PerfilEdit>
                </PerfilImageContainer>

                <PerfilContent>
                    <UserName>Ruan Pablo</UserName>
                    <UserId>@NaPpY</UserId>
                    <UserDescription>🐒 this is not the end!</UserDescription>
                </PerfilContent>

            </PerfilInfo>

            <PerfilCoinsView>
                <CoinStats>Estatísticas</CoinStats>

                <CoinView>
                    <PerfilCoins name="slack" color="#45A7AD" coins="472" description='Total de BTC'/>
                    <PerfilCoins name="codesandbox" color="#702230" coins="32456" description='Total de XP'/>
                </CoinView>

                <CoinView>
                    <PerfilCoins name="moon" color="#844799" coins="231" description='Medalhas'/>
                </CoinView>

            </PerfilCoinsView>

        </Container>
    )
}