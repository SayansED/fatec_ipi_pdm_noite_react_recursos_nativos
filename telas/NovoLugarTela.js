import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Cores from '../constantes/Cores'

const NovoLugarTela = (props) => {
    
    const [novoLugar, setNovoLugar] = usestate('');

    const novoLugarAlterado = (texto) = {
        setNovoLugar(texto);
    };

    const adcionarLugar = () => {
        console.log("Adcionando lugar...");
    }

    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.titulo}>Cadastrar novo Lugar</Text>
            <TextInput 
                style={styles.textInput}
                value={novoLugar}
                onChangeText={novoLugarAlterado}
            />
            <Button 
                title="Salvar Lugar"
                color={Cores.primary}
                onPress={() => adcionarLugar()}
            />
        </View>
        </ScrollView>
    )
}

export default NovoLugarTela

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 40,
        marginTop: 20
    },
    titulo: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 16
    },
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    }
});
