import { StyleSheet} from 'react-native';
import colors from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.aliceBlue,
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

export default styles;