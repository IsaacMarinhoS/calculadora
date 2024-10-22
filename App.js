import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    // Adiciona "×" e "÷" diretamente ao input
    setInput(input + value);
  };

  const calculateResult = () => {
    // Substitui "×" por "*" e "÷" por "/" apenas no momento do cálculo
    let formattedInput = input.replace(/×/g, "*").replace(/÷/g, "/");
    
    try {
      setResult(eval(formattedInput).toString());  // Calcula o resultado
    } catch (e) {
      setResult("Erro");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* Linha 1 */}
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("(")}>
          <Text style={styles.buttonText}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(")")}>
          <Text style={styles.buttonText}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("÷")}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>

        {/* Linha 2 */}
        <TouchableOpacity style={styles.button} onPress={() => handleInput("7")}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("8")}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("9")}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("×")}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>

        {/* Linha 3 */}
        <TouchableOpacity style={styles.button} onPress={() => handleInput("4")}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("5")}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("6")}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("-")}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        {/* Linha 4 */}
        <TouchableOpacity style={styles.button} onPress={() => handleInput("1")}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("2")}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("3")}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("+")}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        {/* Linha 5 */}
        <TouchableOpacity style={styles.button} onPress={() => handleInput("0")}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(".")}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEqual} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#282828',
  },
  resultText: {
    color: '#fff',
    fontSize: 24,
  },
  result: {
    color: '#fff',
    fontSize: 48,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#282828',
  },
  button: {
    width: '20%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#505050',
    margin: 5,
    borderRadius: 10,
  },
  buttonEqual: {
    width: '45%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9500',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
});
