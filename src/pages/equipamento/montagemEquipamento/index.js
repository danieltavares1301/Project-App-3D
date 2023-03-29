import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import CardQuestions from '../../../components/cardQuestions';

/* Seria possível remover quase todas as perguntas e fazê-las serem gerenciadas e respondidas pelo próprio app */
export default function MontagemEquipamento() {
  const [selectedCheckBox1, setSelectedCheckBox1] = useState(null);
  const [selectedCheckBox2, setSelectedCheckBox2] = useState(null);
  const [selectedCheckBox3, setSelectedCheckBox3] = useState(null);
  const [selectedCheckBox4, setSelectedCheckBox4] = useState(null);
  const [selectedCheckBox5, setSelectedCheckBox5] = useState(null);
  const [selectedCheckBox6, setSelectedCheckBox6] = useState(null);
  const [selectedCheckBox7, setSelectedCheckBox7] = useState(null);
  const [selectedCheckBox8, setSelectedCheckBox8] = useState(null);
  const [selectedCheckBox9, setSelectedCheckBox9] = useState(null);
  const [selectedCheckBox10, setSelectedCheckBox10] = useState(null);
  const [selectedCheckBox11, setSelectedCheckBox11] = useState(null);
  const [selectedCheckBox12, setSelectedCheckBox12] = useState(null);
  const [selectedCheckBox13, setSelectedCheckBox13] = useState(null);
  const [selectedCheckBox14, setSelectedCheckBox14] = useState(null);
  const [selectedCheckBox15, setSelectedCheckBox15] = useState(null);

  return (
    <ScrollView style={{padding: 10}}>
      <CardQuestions
        numberQuestion={1}
        question="EQUIPAMENTO ESTÁ LIMPO?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox1}
        setSelectedCheckBox={setSelectedCheckBox1}
      />
      <CardQuestions
        numberQuestion={2}
        question="EQUIPAMENTO TEM PROCESSAMENTO?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox2}
        setSelectedCheckBox={setSelectedCheckBox2}
      />
      <CardQuestions
        numberQuestion={3}
        question="EQUIPAMENTO TEM DESENHO?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox3}
        setSelectedCheckBox={setSelectedCheckBox3}
      />
      <CardQuestions
        numberQuestion={4}
        question="EQUIPAMENTO TEM LISTA DE PEÇAS (BOM)?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox4}
        setSelectedCheckBox={setSelectedCheckBox4}
      />
      <CardQuestions
        numberQuestion={5}
        question="AS ETAPAS DO PROCEDIMENTO ESTÃO SENDO SEGUIDAS?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox5}
        setSelectedCheckBox={setSelectedCheckBox5}
      />
      <CardQuestions
        numberQuestion={6}
        question="EM QUAIS TURNOS FORAM EXECUTADOS A DESMONTAGEM?"
        firstCB="A"
        secondCB="B"
        thirdCB="C"
        selectedCheckBox={selectedCheckBox6}
        setSelectedCheckBox={setSelectedCheckBox6}
      />
      <CardQuestions
        numberQuestion={7}
        question="NOME DOS EXECUTANTES ENVOLVIDOS NA DESMONTAGEM?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox7}
        setSelectedCheckBox={setSelectedCheckBox7}
      />
      <CardQuestions
        numberQuestion={8}
        question="AS FERRAMENTAS DE TRABALHO ESTÃO DISPONÍVEIS NA OFICINA CENTRAL?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox8}
        setSelectedCheckBox={setSelectedCheckBox8}
      />
      <CardQuestions
        numberQuestion={9}
        question="FORAM FEITAS AS MARCAÇÕES NO EQUIPAMENTO DE FORMA LEGÍVEL E CORREA? SE POSSÍVEL REGISTRAR FOTOS NA PASTA DO EQUIPAMENTO."
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox9}
        setSelectedCheckBox={setSelectedCheckBox9}
      />
      <CardQuestions
        numberQuestion={10}
        question="O EQUIPAMENTO CHEGOU COM ACOPLAMENTO NA OFICINA?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox10}
        setSelectedCheckBox={setSelectedCheckBox10}
      />
      <CardQuestions
        numberQuestion={11}
        question="O EQUIPAMENTO CHEGOU COM ALGUMA PARTE SOLTA OU QUEBRADA?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox11}
        setSelectedCheckBox={setSelectedCheckBox11}
      />
      <CardQuestions
        numberQuestion={12}
        question="HOUVE ALGUMA QUEBRA/SACRIFÍCIO DE PEÇAS DURANTE A DESMONTAGEM?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox12}
        setSelectedCheckBox={setSelectedCheckBox12}
      />
      <CardQuestions
        numberQuestion={13}
        question="O EQUIPAMENTO FOI TOTALMENTE DESMONTADO?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox13}
        setSelectedCheckBox={setSelectedCheckBox13}
      />
      <CardQuestions
        numberQuestion={14}
        question="O EQUIPAMENTO NECESSITA DE JATEAMENTO?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox14}
        setSelectedCheckBox={setSelectedCheckBox14}
      />
      <CardQuestions
        numberQuestion={15}
        question="TODAS AS PEÇAS ESTÃO LIMPAS E ISENTAS DE ÓELO E GRAXA?"
        firstCB="SIM"
        secondCB="NÃO"
        thirdCB="N/A"
        selectedCheckBox={selectedCheckBox15}
        setSelectedCheckBox={setSelectedCheckBox15}
      />
    </ScrollView>
  );
}
