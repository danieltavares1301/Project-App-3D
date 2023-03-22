import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CardQuestions from '../../../components/cardQuestions';

export default function MontagemEquipamento() {
  const [selectedCheckBox, setSelectedCheckBox] = useState(null);
  useEffect(() => {
    console.log(selectedCheckBox);
  }, [selectedCheckBox]);
  return (
    <View style={{padding: 10}}>
      <CardQuestions
        question="Equipamento está limpo? "
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox}
        setSelectedCheckBox={setSelectedCheckBox}
      />
    </View>
  );
}
