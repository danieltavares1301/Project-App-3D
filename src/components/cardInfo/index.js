import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {borderWidth: 0.2, borderRadius: 10, marginBottom: 10},
  cardHeader: {
    backgroundColor: '#d0d0d0',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderColor: '#d0d0d0',
    height: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: '#3F3F3F',
  },
  cardBody: {fontSize: 15, padding: 10},
});

export default function CardInfo({title, body}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <Text style={styles.cardBody}>{body}</Text>
    </View>
  );
}
