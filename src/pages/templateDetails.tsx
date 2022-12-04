import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const templateDetails = ({ navigation }: RouterProps) => {
    return (
        <View style={{ padding: 12 }}>

        </View>
    )
}



export default templateDetails