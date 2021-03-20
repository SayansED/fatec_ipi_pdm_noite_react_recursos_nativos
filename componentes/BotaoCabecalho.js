import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Cores from '../constantes/Cores';

const BotaoCabecalho = (props) => {
    return (
        <HeaderButton 
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.Os === 'android' ? 'black' : Cores.primary}
        />
    )
}

export default BotaoCabecalho

const styles = StyleSheet.create({})
