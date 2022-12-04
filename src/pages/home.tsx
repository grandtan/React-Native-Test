import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {

    return (
        <View style={{ padding: 16 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TemplatesList")}>
                <View style={styles.mainContainer}>
                    <Text style={{ fontSize: 24 }}>Folder sample</Text>
                    <Icon name="arrowright" size={28} color="#52A9FB" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingVertical: 16, paddingHorizontal: 16 }
});


export default Home