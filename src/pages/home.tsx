import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonCustom from "../components/ButtonCutom";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {
    return (
        <View style={{ padding: 12 }}>
            <ButtonCustom
                onPress={() => navigation.navigate("TemplatesList")}
                title="Folder sample"
            />
        </View>
    )
}



export default Home