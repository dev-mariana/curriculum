import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  page: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    alignItems: 'center'
  },
  container_header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  function: {
    color: '#939393',
    marginBottom: 10,
  },
  contact_icons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '20%',
    marginTop: 10,
  },
  card_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    width: '90%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
    fontFamily: 'Helvetica'
  },
  card_header: {
      textAlign: 'center'
  },
  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    color: '#000',
    marginBottom: 10,
  }
});

export default style;