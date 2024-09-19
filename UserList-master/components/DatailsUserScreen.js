import { useState } from "react";
import * as React from 'react';
import { View, StyleSheet } from "react-native";
import { Card, Text, Title } from "react-native-paper";
import Users from "../data/Users";

const getUserForId = (id) => {
    return Users.find(u => u.id == id)
}

export default ({ route }) => {
    const [user] = useState(getUserForId(route.params.id))

    return (
        <View>
            <Card>
                <Card.Cover style={styles.image} source={
                    {
                        uri: user.urlImagem
                    }}
                />
            </Card>
            <Text style={styles.nameStyle}>{user.name}</Text>
            <Text style={styles.emailStyle}>{user.email}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        padding: 20,
        margin: 10,
    },
    middle: {
        flex: 0.3,
        borderWidth: 5,
    },
    image: {
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'flex-center',
        height: 550,
        marginTop: 10,
        maxWidth: 500,
    },
    emailStyle: {
        fontSize: 30,
        padding: 15,
        textAlign: "center",
    },
    nameStyle: {
        padding: 15,
        fontSize: 50,
        textAlign: "center",
    }
})