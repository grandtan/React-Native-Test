import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DATA_MOCK } from '../mocks/templates';

import { CheckBox, Button } from 'react-native-elements';

interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: any;
}

const templateDetails = ({ route }: RouterProps) => {
  const itemId = route.params.itemId as number;
  const list = DATA_MOCK.data
    .find(x => x.attributes.id === itemId)
    ?.attributes.templates.find(item => item.id === itemId)
    ?.children.find(x => x.id === itemId);

  const [checkQuestion, setCheckQuestion] = useState<number>();
  const [contentActive, setContentActive] = useState<boolean>(false);

  const actionSubmit = () => {
    setContentActive(true);
  };

  const componentDetails = () => <View />;

  return (
    <View style={{ padding: 12 }}>
      <View style={styles.mainContainer}>
        <View style={styles.card}>
          <Text>Select Type of Report</Text>
          <Text style={styles.cardTextTitle}>Required</Text>
        </View>
        <View style={styles.cardLineTop} />
        {list?.question_options.map(item => (
          <CheckBox
            containerStyle={{
              backgroundColor: 'white',
              borderColor: 'white',
              padding: 0,
            }}
            checkedColor="#F29A4B"
            size={40}
            title={item.label}
            onPress={() => setCheckQuestion(item.id)}
            checked={checkQuestion === item.id}
          />
        ))}
        <View style={styles.cardLineBottom} />
      </View>
      {contentActive ? (
        componentDetails()
      ) : (
        <Button
          buttonStyle={{
            backgroundColor: '#F29A4B',
            marginTop: 24,
            paddingVertical: 12,
          }}
          titleStyle={{ fontWeight: '600' }}
          onPress={() => actionSubmit()}
          disabled={!checkQuestion ? true : false}
          title="Submit"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F29A4B',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTextTitle: { fontSize: 14, color: '#F29A4B', fontWeight: '600' },
  cardLineTop: {
    width: '100%',
    borderBottomWidth: 2,
    marginVertical: 16,
    borderColor: '#F29A4B',
  },
  cardLineBottom: {
    width: '100%',
    borderBottomWidth: 2,
    marginTop: 16,
    borderColor: '#F29A4B',
  },
});

export default templateDetails;
