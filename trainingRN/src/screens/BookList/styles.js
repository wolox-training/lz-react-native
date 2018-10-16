import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.aliceBlue
  },
  book: {
    flexDirection: 'row',
    marginBottom: 10
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  author: {
    fontSize: 14
  },
  text: {
    flexDirection: 'column',
    marginBottom: 5
  }
});

export default styles;
