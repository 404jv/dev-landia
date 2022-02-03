import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";



export const Container = styled.View`
    width: 160px;
    height: 55px;
    background-color: #22282B;
    border-width: 2px;
    border-style: solid;
    border-color: #9FA2A5;
    margin-right: 10px;
    border-radius: 8px;


    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    margin-bottom: 10px;
    margin-left: 10px;
`;


export const CoinInfo = styled.View`
    margin-left: 10px;
`;

export const CoinQTD = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: 600;
`;

export const CoinDescription = styled.Text`
    color: #fff;
`;