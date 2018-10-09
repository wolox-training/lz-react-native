import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  taskBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  task: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    borderStyle: 'solid',
    borderRadius: 20,
    borderWidth: 1,
    minWidth: 200
  }
});