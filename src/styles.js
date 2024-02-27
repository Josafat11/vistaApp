// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f8880',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#3f8880',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    color: '#a0fb0e',
    marginTop: 10,
  },
  main: {
    flex: 1,  
    backgroundColor: '#3f8880',
    padding: 20,
    color: '#fef6cd',
    textAlign: 'center', 
  },
  link: {
    color: '#fef6cd',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#20c67a',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 16,
  },
link: {
  color: '#a0fb0e',
  textDecorationLine: 'underline',
  marginTop: 10,
},
infoContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 200,
},
icon: {
  width: 100,  // Ajusta el tamaño según tus necesidades
  height: 100, // Ajusta el tamaño según tus necesidades
  marginTop: 5,
},
configButtonContainer: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  marginBottom: 700,
},
configButton: {
  backgroundColor: '#a0fb0e',
  padding: 10,
  borderRadius: 5,
},
configButtonText: {
  color: '#000',
},
estadoContainer: {
  backgroundColor: '#fff', // Fondo blanco para las cajas de estado
  padding: 10,
  borderRadius: 8,
  marginBottom: 20,
},

botonEstado: {
  backgroundColor: '#a0fb0e',
  padding: 8,
  borderRadius: 5,
  marginTop: 5,
  alignItems: 'center',
},

estadoText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#3f8880',
},
leftContainer: {
  marginBottom: 150,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: 10, // Ajusta según sea necesario
},
opcionContainer: {
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 8,
  marginBottom: 20,
},

});
