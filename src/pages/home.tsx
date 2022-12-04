import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonCustom from "../components/ButtonCutom";
import { DATA_MOCK } from '../mocks/templates'
interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {
    return (
        <View style={{ padding: 12 }}>
            {
                DATA_MOCK.data.map(item =>
                    <ButtonCustom
                        onPress={() => navigation.navigate("TemplatesList", { itemId: item.attributes.id })}
                        title={item.attributes.name}
                    />)
            }
        </View>
    )
}



export default Home


