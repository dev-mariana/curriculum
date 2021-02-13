import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import photo from './assets/mari2.png';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/card/index';
import style from './components/card/style';

const App = () => {
  const handleSocialNetworks = (contact_icons) => {
    switch (contact_icons) {
      case 'linkedin':
        Alert.alert('My Linkedin', 'https://www.linkedin.com/in/dev-mariana/');
        break;
      case 'github':
        Alert.alert('My Github', 'https://github.com/dev-mariana');
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

          <Card title="Professional Experience">
            <Text style={style.card_content_text}>
              Frontend Web Development Intern at Inpartec
            </Text>
            <Text style={style.card_content_text}>
              Fullstack Web Development Intern at Rio Analytics
            </Text>
            <Text style={style.card_content_text}>
              Junior Frontend Developer at Techdog Solutions
            </Text>
          </Card>
          <Card title="Academic Education" style={style.marginBottom}>
            <Text style={style.card_content_text}>
              Complete High School at Escola e Curso Icaro
            </Text>
            <Text style={style.card_content_text}>
              Complete Technical Course in IT at Senac Rio
            </Text>
            <Text style={style.card_content_text}>
              Studying Systems Analysis and Development at IBMR
            </Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

export default App;
