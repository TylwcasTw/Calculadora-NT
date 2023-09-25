import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Rodape(){
    return(
        <View style={styles.formContext}>
            <View style={styles.formMain}>
                <Text style={styles.labelMain}>Media</Text>
                <Text style={styles.labelMain}>Cassificação</Text>
            </View>

            <View style={styles.divMain}></View>
            
            <View style={styles.form}>
                <Text style={styles.label}>Menor que 18</Text>
                <Text style={styles.label}>Magreza</Text>
            </View>
            
            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>18,5 a 24</Text>
                <Text style={styles.label}>Normal</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>25 a 29</Text>
                <Text style={styles.label}>Sobrepeso</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>30 a 34</Text>
                <Text style={styles.label}>Obesidade grau I</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>35 a 39</Text>
                <Text style={styles.label}>Obesidade grau II</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Maior que 40</Text>
                <Text style={styles.label}>Obesidade grau III</Text>
            </View>
        </View>
    );
}