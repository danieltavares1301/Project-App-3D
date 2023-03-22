import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';

const styles = StyleSheet.create({
  card: {borderWidth: 0.2, borderRadius: 10, marginBottom: 10},
  cardHeader: {
    backgroundColor: '#d0d0d0',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderColor: '#d0d0d0',
    minHeight: 30,
    padding: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: '#3F3F3F',
  },
  cardBody: {
    fontSize: 15,
  },
});

const CheckBoxes = ({
  selectedCheckBox,
  setSelectedCheckBox,
  firstCB,
  secondCB,
  thirdCB,
}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
      }}>
      <Checkbox.Item
        label={firstCB}
        status={selectedCheckBox === firstCB ? 'checked' : 'unchecked'}
        onPress={() => {
          if (selectedCheckBox === firstCB) {
            setSelectedCheckBox(null);
          } else {
            setSelectedCheckBox(firstCB);
          }
        }}
      />
      <Checkbox.Item
        label={secondCB}
        status={selectedCheckBox === secondCB ? 'checked' : 'unchecked'}
        onPress={() => {
          if (selectedCheckBox === secondCB) {
            setSelectedCheckBox(null);
          } else {
            setSelectedCheckBox(secondCB);
          }
        }}
      />
      <Checkbox.Item
        label={thirdCB}
        status={selectedCheckBox === thirdCB ? 'checked' : 'unchecked'}
        onPress={() => {
          if (selectedCheckBox === thirdCB) {
            setSelectedCheckBox(null);
          } else {
            setSelectedCheckBox(thirdCB);
          }
        }}
      />
    </View>
  );
};

export default function CardQuestions({
  question,
  selectedCheckBox,
  setSelectedCheckBox,
  firstCB,
  secondCB,
  thirdCB,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{question}</Text>
      </View>
      <View style={styles.cardBody}>
        {
          <CheckBoxes
            selectedCheckBox={selectedCheckBox}
            setSelectedCheckBox={setSelectedCheckBox}
            firstCB={firstCB}
            secondCB={secondCB}
            thirdCB={thirdCB}
          />
        }
      </View>
    </View>
  );
}
