import { NavigationProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, AppRegistry, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonCustom from "../components/ButtonCutom"
import { DATA_MOCK } from '../mocks/templates'

interface RouterProps {
    navigation: NavigationProp<any, any>;
    route: any
}

const TemplatesList = ({ navigation, route }: RouterProps) => {
    const itemId = route.params["itemId"] as number;

    return (
        <View style={{ padding: 12 }}>
            {
                DATA_MOCK.data.find(x => x.attributes.id === itemId)?.attributes.templates.map(item =>
                    <ButtonCustom
                        onPress={() => navigation.navigate("TemplateDetails", { itemId: item.id })}
                        title={item.name}
                        borderRadius={12}
                        iconColor="#F29A4B"
                    />)
            }

        </View>
    )
}

export default TemplatesList