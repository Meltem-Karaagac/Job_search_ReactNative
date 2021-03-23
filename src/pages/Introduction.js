import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { TopicItem } from '../components';
import { intro } from '../style';

const topics = [
  {
    id: 0,
    name: 'Java',
    color: '#feca57',
  },
  {
    id: 1,
    name: 'Python',
    color: '#007f5f',
  },
  {
    id: 2,
    name: 'Javascript',
    color: '#0f1111',
  },
  {
    id: 3,
    name: '.NET',
    color: '#feca57',
  },
  {
    id: 4,
    name: 'Dart',
    color: '#007f5f',
  },
  {
    id: 5,
    name: 'Go',
    color: '#0f1111',
  },
  {
    id: 6,
    name: 'Ruby',
    color: '#feca57',
  },
  {
    id: 7,
    name: 'C',
    color: '#007f5f',
  },
  {
    id: 8,
    name: 'C++',
    color: '#0f1111',
  },
];

const Introduction = (props) => {
  const selectLanguage = (lang) => {
    props.navigation.navigate('JobsPage', { selectedLanguage: lang });
  };

  return (
    <SafeAreaView style={intro.safeArea}>
      <View style={intro.bannerTop}>
        <Text style={intro.title}>Job Search App</Text>

      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ alignItems: 'center' }}
        style={intro.scrollArea}
        bounces={true}>
        {topics.map((t) => {
          return (
            <TopicItem
              key={t.id}
              item={t}
              onSelect={() => selectLanguage(t.name)}
            />
          );
        })}
      </ScrollView>
      <View style={intro.bannerBottom}></View>
    </SafeAreaView>
  );
};

export { Introduction };
