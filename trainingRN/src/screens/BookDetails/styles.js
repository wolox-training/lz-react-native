import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.aliceBlue,
    padding: 20
  },
  image: {
    height: 300,
    width: 150
  }
});

export default styles;
