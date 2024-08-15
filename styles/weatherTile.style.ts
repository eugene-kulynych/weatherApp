import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    display: 'flex',
    padding: 20,
    position: 'relative',
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  inner: {
    borderWidth: 5,
    borderColor: '#35558A',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
    display: 'flex',
  },
  headers: {
    color: '#EFECE6',
    fontSize: 22,
    paddingBottom: 20,
  },
  text: {
    fontSize: 18,
    paddingBottom: 20,
  },
});
