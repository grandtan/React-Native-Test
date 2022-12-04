import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { ButtonProps } from "../types/buttonCustom"


const ButtonCustom = ({ onPress, title, borderRadius = 0, iconColor = "#52A9FB" }: ButtonProps) => {
    return (
        <View style={{ padding: 12 }}>
            <TouchableOpacity onPress={onPress}>
                <View style={{ ...styles.mainContainer, borderRadius: borderRadius }}>
                    <Text style={{ fontSize: 24 }}>{title}</Text>
                    <Icon name="arrowright" size={28} color={iconColor} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingVertical: 16, paddingHorizontal: 16 }
});

export default ButtonCustom