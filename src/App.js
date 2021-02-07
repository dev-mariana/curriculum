import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import photo from './assets/mari2.png';
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  const handleSocialNetworks = (contact_icons) => {
    switch (contact_icons) {
      case 'linkedin':
        Alert.alert('My Linkedin','https://www.linkedin.com/in/dev-mariana/');
        break;
      case 'github':
        Alert.alert('My Github' ,'https://github.com/dev-mariana');
        break;

      default:
        break;
    }
  };

  return (
    <>
      <ScrollView>
        <View style={style.page}>
          <View style={style.container_header}>
            <Image source={photo} style={style.photo} />
            <Text style={style.name}>Mariana Bastos</Text>
            <Text style={style.function}>Fullstack Web Developer</Text>
            <View style={style.contact_icons}>
              <TouchableOpacity onPress={() => handleSocialNetworks('github')}>
                <Icon name="github" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSocialNetworks('linkedin')}>
                <Icon name="linkedin" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Professional Experience</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>
                  Frontend Web Development Intern at Inpartec
                </Text>
                <Text style={style.card_content_text}>
                  Fullstack Web Development Intern at Rio Analytics
                </Text>
                <Text style={style.card_content_text}>
                  Junior Frontend Developer at Techdog Solutions
                </Text>
              </View>
            </View>
          </View>

          <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Academic Education</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>
                  Complete High School at Escola e Curso Icaro
                </Text>
                <Text style={style.card_content_text}>
                  Complete Technical Course in IT at Senac Rio
                </Text>
                <Text style={style.card_content_text}>
                  Studying Systems Analysis and Development at IBMR
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
    alignItems: 'center',
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
    marginBottom: 20
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#fff',
  },
  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
