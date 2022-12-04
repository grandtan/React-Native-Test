import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonCustom from "../components/ButtonCutom"
interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const TemplatesList = ({ navigation }: RouterProps) => {
    return (
        <View style={{ padding: 12 }}>
            <ButtonCustom
                onPress={() => navigation.navigate("TemplateDetails")}
                title="Template sample"
                borderRadius={12}
            />
        </View>
    )
}

export default TemplatesList