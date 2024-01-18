import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  containerImage: {
    height: 350,
    padding: 75,
    borderRadius: 10,
    marginBottom: 35,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '800',
    marginVertical: 20,
  },
  pointsText: {
    fontSize: 24,
    marginTop: 32,
    fontWeight: '800',
  },
  textTitle: {
    fontSize: 14,
  },
  button: {
    marginTop: 50,
  },
});
