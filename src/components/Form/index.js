/*import React, {useState} from "react";
import {TextInput, View, Text, Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form (){
const [height, setHeight]= useState(null);
const [weight, setWeight]= useState(null);
const [messageImc, setMessageImc] =useState(" Preencha o peso e altura! ");
const [imc, setImc]=useState(null);
const [textButton, setTextButton]=useState( "Calcular" );

function imcCalculator() {
    return setImc((weight /(height*height)).toFixed(2))
   
}

function validationImc(){
    if (weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual a: ")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular Novamente")
    setMessageImc("Preencha o peso e altura!")
}
    return(
        <View>
            <View>
            <Text>Altura</Text>
            <TextInput onChargeText={setHeight} value={height} placeholder="Ex: 1.90" keyboardType="Numeric"/>

            <Text>Peso</Text>
            <TextInput onChangeText={setWeight} value={weight} placeholder="Ex: 90" keyboardType="Numeric"/>
            <Button onPress={()=> validationImc()} title={textButton}/>

            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )

}*/

import React, { useState} from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration } from "react-native";
import ResultMedia from "./ResultMedia";
import styles from "./Styles";


export default function Form(){

    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2] = useState(null);
    const [nota3, setNota3] = useState(null);
    const [nota4, setNota4] = useState(null);
    const [messageMedia, setMessageMedia] =useState ("Adicione As Notas");
    const [media, setMedia] =useState (null);
    const [classi, setClassi] = useState('');
    const [textButton, setTextButton]=useState ("Calcular");
    const [errormessage, setErrorMessage]= useState(null);

function MediaCalculator(){
  const medias= ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4);

  setMedia(medias);
  
  if (medias < 5) {
      setClassi("Reprovado")
    }
    else if (medias >= 5 && medias <=7) {
        setClassi("Recuperação")
    }
    else {
        setClassi("Aprovado")
    }
    
}
function verificationMedia (){
    setErrorMessage("*Campo Obrigatório")
    Vibration.vibrate()

}

function validationMedia(){
    if (nota1 !== null && nota2!== null && nota3!== null && nota4!== null){
        MediaCalculator()
        setNota1(null)
        setNota2(null)
        setNota3(null)
        setNota4(null)
        setMessageMedia(" Sua Média é igual a: ")
        setTextButton ("Calcular Novamente")
        setErrorMessage(null)
    return
}
    setMedia(null)
    setTextButton("Calcular")
    setMessageMedia("Preencha As Notas Para Calcular!!")
    verificationMedia()
    
}
return(
<View style={styles.formContext}>
    <View style={styles.form}>
    
        <Text style={styles.label}>Nota 1</Text>
        <Text style={styles.errormessage}>{errormessage}</Text> 
        <TextInput style={styles.input} onChangeText={setNota1} value={nota1} placeholder="Ex: 10" keyboardType="numeric"/>
        
        <Text style={styles.label}>Nota 2</Text>
        <Text style={styles.errormessage}>{errormessage}</Text>
        <TextInput style={styles.input} onChangeText={setNota2} value={nota2} placeholder="Ex: 10" keyboardType="numeric"/>

        <Text style={styles.label}>Nota 3</Text>
        <Text style={styles.errormessage}>{errormessage}</Text> 
        <TextInput style={styles.input} onChangeText={setNota3} value={nota3} placeholder="Ex: 10" keyboardType="numeric"/>
        
        <Text style={styles.label}>Nota 4</Text>
        <Text style={styles.errormessage}>{errormessage}</Text> 
        <TextInput style={styles.input} onChangeText={setNota4} value={nota4} placeholder="Ex: 10" keyboardType="numeric"/>

       <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationMedia()}><Text>{textButton}</Text></TouchableOpacity>
       <ResultMedia messageResultMedia={messageMedia} resultMedia={media} messageClassi={classi}/>
    </View>
    
</View>
);
}