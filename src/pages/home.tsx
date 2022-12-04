import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button, TouchableOpacity } from "react-native";

const Home = () => {

    return (
        <View style={{ padding: 4 }}>
            <TouchableOpacity>
                <View style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Text>Folder sample</Text>
                    <Text>x</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Home