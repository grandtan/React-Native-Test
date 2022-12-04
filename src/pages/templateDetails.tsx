import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { DATA_MOCK } from '../mocks/templates';
import { CheckBox, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/AntDesign';

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

  const [checkQuestionId, setCheckQuestionId] = useState<number>();
  const [contentActive, setContentActive] = useState<boolean>(false);
  const [listActiveCardSubContentById, setListActiveCardSubContentByid] = useState<string[]>([])

  const actionSubmit = () => {
    setContentActive(true);
  };

  const componentDetails = () => {

    const listItemById = list?.children.find(e => e.id === checkQuestionId)

    const actionActiveCard = (item) => {
      const checkItem = listActiveCardSubContentById.includes(String(item.id + item.type))
      if (checkItem) {
        let arrayList = listActiveCardSubContentById.filter(e => e !== String(item.id + item.type))
        setListActiveCardSubContentByid(arrayList)
      } else {
        setListActiveCardSubContentByid([...listActiveCardSubContentById, String(item.id + item.type)])
      }
    }

    return (
      <View >
        {
          listItemById?.children.map(item =>
            <TouchableOpacity onPress={() => actionActiveCard(item)}>
              <View key={item.id} style={{ ...styles.mainContainer, marginTop: 16 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Icon name={listActiveCardSubContentById.includes(String(item.id + item.type)) ? "up" : "down"} size={20} color="#F29A4B" />
                  <Text style={{ paddingLeft: 5 }}>{item.name || item.type}</Text>
                </View>
                <View style={styles.cardLineBottom} />
                {
                  listActiveCardSubContentById.includes(String(item.id + item.type)) && (
                    <View>
                      {
                        item.children.map(subItem =>
                          <View style={{ ...styles.mainContainer, marginTop: 16 }}>
                            <Text>{subItem.text || subItem.type}</Text>
                            <View style={{ ...styles.cardLineBottom, marginBottom: 14 }} />
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                              <Icon name={subItem.compulsory ? "like1" : "dislike1"} size={28} color="#F29A4B" />
                            </View>
                          </View>
                        )
                      }
                    </View>
                  )
                }
              </View>
            </TouchableOpacity>
          )
        }
      </View>
    )
  }


  return (
    <View style={{ padding: 12, flex: 1 }}>
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
            onPress={() => setCheckQuestionId(item.id)}
            checked={checkQuestionId === item.id}
          />
        ))}
        <View style={styles.cardLineBottom} />
      </View>
      {contentActive ? (
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {componentDetails()}
        </ScrollView>
      ) : (
        <Button
          buttonStyle={{
            backgroundColor: '#F29A4B',
            marginTop: 24,
            paddingVertical: 12,
          }}
          titleStyle={{ fontWeight: '600' }}
          onPress={() => actionSubmit()}
          disabled={!checkQuestionId ? true : false}
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
    borderRadius: 8
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
  scrollView: {
    marginBottom: 24,
    marginTop: 12,


  },
});

export default templateDetails;
