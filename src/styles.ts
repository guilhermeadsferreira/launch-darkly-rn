import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  titleLogin: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  banner: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    gap: 8,
    marginTop: 24,
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
  },
  modules: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    width: '100%',
    padding: 16,
    marginTop: 24,
    flexDirection: 'row',
    gap: '5%',
  },
  module: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moduleText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
});
