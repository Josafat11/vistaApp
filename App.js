import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const ConfigScreen = () => {
  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    console.log('Cerrar Sesión');
  };

  const handleEnviarInforme = () => {
    // Lógica para enviar informe
    console.log('Enviar Informe');
  };

  const handleAjustarVolumen = (volumen) => {
    // Lógica para ajustar volumen
    console.log('Ajustar Volumen:', volumen);
  };

  const handleContactarAsesor = () => {
    // Lógica para contactar asesor
    console.log('Contactar Asesor');
  };

  const handleConfigurarHorarios = () => {
    // Lógica para configurar horarios
    console.log('Configurar Horarios');
  };

  return (
    <View style={styles.container}>
            <View style={styles.leftContainer}>
      <Text style={styles.title}>Configuración</Text>

      {/* Cerrar Sesión */}
      <View style={styles.estadoContainer}>
        <Text style={styles.opcionText}>Cerrar Sesión:</Text>
        <TouchableOpacity style={styles.configButton} onPress={handleCerrarSesion}>
          <Text style={styles.configButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Enviar Informe */}
      <View style={styles.estadoContainer}>
        <Text style={styles.opcionText}>Enviar Informe:</Text>
        <TouchableOpacity style={styles.configButton} onPress={handleEnviarInforme}>
          <Text style={styles.configButtonText}>Enviar Informe</Text>
        </TouchableOpacity>
      </View>

      {/* Ajustar Volumen */}
      <View style={styles.estadoContainer}>
        <Text style={styles.opcionText}>Ajustar Volumen:</Text>
        {/* Puedes usar un componente como Slider aquí */}
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          onValueChange={handleAjustarVolumen}
        />
      </View>

      {/* Contactar Asesor */}
      <View style={styles.estadoContainer}>
        <Text style={styles.opcionText}>Contactar Asesor:</Text>
        <TouchableOpacity style={styles.configButton} onPress={handleContactarAsesor}>
          <Text style={styles.configButtonText}>Contactar Asesor</Text>
        </TouchableOpacity>
      </View>

      {/* Configurar Horarios */}
      <View style={styles.estadoContainer}>
        <Text style={styles.opcionText}>Configurar Horarios:</Text>
        <TouchableOpacity style={styles.configButton} onPress={handleConfigurarHorarios}>
          <Text style={styles.configButtonText}>Configurar Horarios</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};



const HomeScreen = ({ navigation }) => {
  const [puertaEstado, setPuertaEstado] = useState('cerrada');
  const [detectarPerro, setDetectarPerro] = useState('fuera');
  const [lucesEstado, setLucesEstado] = useState('apagadas');
  const [ponerSeguro, setPonerSeguro] = useState('sin_seguro');
  const [emergencia, setEmergencia] = useState('ninguna');

  const handlePuertaClick = () => {
    const nuevoEstado = puertaEstado === 'cerrada' ? 'abierta' : 'cerrada';
    setPuertaEstado(nuevoEstado);
  };

  const handleSeguroClick = () => {
    const nuevoEstado = ponerSeguro === 'sin_seguro' ? 'con_seguro' : 'sin_seguro';
    setPonerSeguro(nuevoEstado);
  };

  const handleConfiguracion = () => {
    navigation.navigate('ConfigScreen'); // Usando el nombre correcto
  };


  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.infoontainer}>
          <Text style={styles.title}>Puerta</Text>
          <Image source={require('./src/casa-de-mascotas.png')} style={styles.icon} />

          {/* Estado de la puerta */}
          <View style={styles.estadoContainer}>
            <Text style={styles.estadoText}>Estado de la puerta:</Text>
            <TouchableOpacity style={styles.botonEstado} onPress={handlePuertaClick}>
              <Text>{puertaEstado}</Text>
            </TouchableOpacity>
          </View>

          {/* Detectar perro */}
          <View style={styles.estadoContainer}>
            <Text style={styles.estadoText}>Detectar perro:</Text>
            <Text style={styles.estadoText}>{detectarPerro}</Text>
          </View>

          {/* Estado de las luces */}
          <View style={styles.estadoContainer}>
            <Text style={styles.estadoText}>Estado de las luces:</Text>
            <Text style={styles.estadoText}>{lucesEstado}</Text>
          </View>

          {/* Poner seguro */}
          <View style={styles.estadoContainer}>
            <Text style={styles.estadoText}>Poner seguro:</Text>
            <TouchableOpacity style={styles.botonEstado} onPress={handleSeguroClick}>
              <Text>{ponerSeguro}</Text>
            </TouchableOpacity>
          </View>

          {/* Emergencia */}
          <View style={styles.estadoContainer}>
            <Text style={styles.estadoText}>Emergencia:</Text>
            <Text style={styles.estadoText}>{emergencia}</Text>
          </View>
        </View>
      </View>

      <View style={styles.configButtonContainer}>
        <TouchableOpacity style={styles.configButton} onPress={handleConfiguracion}>
          <Text style={styles.configButtonText}>Configuraciones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log('Iniciar sesión con:', username, password);
    // Aquí puedes realizar la lógica de autenticación y decidir si navegar o no
    // Por ahora, siempre navegaremos a la pantalla de inicio exitoso
    navigation.navigate('Home');
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image source={require('./src/perro.png')} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};
3
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
