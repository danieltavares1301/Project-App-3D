import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';

const styles = StyleSheet.create({
  card: {borderWidth: 0.2, borderRadius: 10, marginBottom: 10},
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d0d0d0',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderColor: '#d0d0d0',
    minHeight: 30,
  },
  cardNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 0,
    minWidth: 30,
  },
  cardTitle: {
    padding: 5,
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 0,
    maxWidth: '93%',
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
  numberQuestion,
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
        <View style={styles.cardNumber}>
          <Text style={styles.cardTitle}>{numberQuestion}</Text>
        </View>
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
