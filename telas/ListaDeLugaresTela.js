import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { HeaderButton, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';

const ListaDeLugaresTela = () => {
    return (
        <View>
            <Text>ListaDeLugaresTela</Text>
        </View>
    )
}

ListaDeLugaresTela.navigationOptions = dadosNav => {
    return {
        headerTitle: "Lista de lugares",
        headerRight: () => {
            return (
                <HeaderButton HeaderButtonComponent={BotaoCabecalho}>
                    <Item 
                        title="Adcionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={() => dadosNav.navigation.navigate ("NovoLugar")}
                    />
                </HeaderButton>
            )
        }
    }
}

export default ListaDeLugaresTela

const styles = StyleSheet.create({})
