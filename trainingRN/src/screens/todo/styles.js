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
    justifyContent: 'space-around',
    alignItems: 'baseline'
  },
  task: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    flex: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    borderWidth: 1,
    minWidth: 200,
    maxHeight: 50
  }
});

export default styles;