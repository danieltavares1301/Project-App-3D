import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import CardQuestions from '../../../components/cardQuestions';
import {TextInput, Checkbox, Button} from 'react-native-paper';

/* Seria possível remover quase todas as perguntas e fazê-las serem gerenciadas e respondidas pelo próprio app */
export default function DesmontagemEquipamento({route}) {
  const {TAG, item} = route.params.params;
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

  const [TAGInp, setTAGInp] = useState(TAG ? TAG : '');
  const [codEstoqueInp, setCodEstoqueInp] = useState(item ? item : '');
  const [fabricanteInp, setFabricanteInp] = useState('');
  const [woPedidoInp, setWoPedidoInp] = useState('');
  const [modeloInp, setModeloInp] = useState('');
  const [dataDesmontagemInp, setDataDesmontagemInp] = useState('');
  const [inspetorCQInp, setInspetorCQInp] = useState('');
  const [codRastreioInp, setCodRastreioInp] = useState('');
  const [emergenciaInp, setEmergenciaInp] = useState(false);
  const [planejadoInp, setPlanejadoInp] = useState(false);
  const [falhasInp, setFalhasInp] = useState('');

  return (
    <ScrollView style={{padding: 10}}>
      <Button
        mode="contained"
        icon="camera"
        onPress={() => {}}
        style={{
          backgroundColor: '#207fc7',
          marginBottom: 10,
          width: 100,
          alignSelf: 'flex-start',
        }}>
        FOTO
      </Button>
      <TextInput
        label="TAG"
        value={TAGInp}
        onChangeText={text => setTAGInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 10}}
        activeOutlineColor="green"
        disabled={TAG ? true : false}
      />
      <TextInput
        label="COD. ESTOQUE"
        value={codEstoqueInp}
        onChangeText={text => setCodEstoqueInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 10}}
        activeOutlineColor="green"
        disabled={item ? true : false}
      />
      <TextInput
        label="FABRICANTE"
        value={fabricanteInp}
        onChangeText={text => setFabricanteInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 10}}
        activeOutlineColor="green"
      />
      <TextInput
        label="WO/PEDIDO/ST"
        value={woPedidoInp}
        onChangeText={text => setWoPedidoInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 10}}
        activeOutlineColor="green"
      />
      <TextInput
        label="MODELO DO EQUIPAMENTO"
        value={modeloInp}
        onChangeText={text => setModeloInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 10}}
        activeOutlineColor="green"
      />
      <TextInput
        label="DATA DA DESMONTAGEM"
        value={dataDesmontagemInp}
        onChangeText={text => setDataDesmontagemInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 10}}
        activeOutlineColor="green"
      />
      <TextInput
        label="INSPETOR C.Q."
        value={inspetorCQInp}
        onChangeText={text => setInspetorCQInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 10}}
        activeOutlineColor="green"
      />
      <TextInput
        label="CÓD RASTREIO"
        value={codRastreioInp}
        onChangeText={text => setCodRastreioInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 10}}
        activeOutlineColor="green"
      />
      <Checkbox.Item
        label={'EMERGÊNCIA'}
        status={emergenciaInp ? 'checked' : 'unchecked'}
        onPress={() => setEmergenciaInp(!emergenciaInp)}
        style={{marginBottom: 10}}
      />
      <Checkbox.Item
        label={'PLANEJADO'}
        status={planejadoInp ? 'checked' : 'unchecked'}
        onPress={() => setPlanejadoInp(!planejadoInp)}
        style={{marginBottom: 10}}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        ETAPA 1: DESMONTAGEM / LIMPEZA
      </Text>
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
      <Text
        style={{
          fontSize: 15,
          fontWeight: '600',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        LISTE TODAS AS FALHAS IDENTIFICADAS DURANTE A DESMONTAGEM
      </Text>
      <TextInput
        label="FALHAS"
        value={falhasInp}
        onChangeText={text => setFalhasInp(text)}
        mode="outlined"
        style={{backgroundColor: '#ffffff', marginBottom: 15}}
        activeOutlineColor="green"
      />
      <Button
        mode="contained"
        style={{
          backgroundColor: '#207fc7',
          marginBottom: 30,
          width: 300,
          alignSelf: 'center',
        }}>
        ENVIAR RELATÓRIO
      </Button>
    </ScrollView>
  );
}
