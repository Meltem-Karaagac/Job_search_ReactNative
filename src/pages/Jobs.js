import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';
import Modal from 'react-native-modal';
import HTMLView from 'react-native-htmlview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import { jobs } from '../style';
import { JobItem, SearchBar } from '../components';

const Jobs = (props) => {
  const selectedProgLang = props.route.params.selectedLanguage;
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [modalFlag, setModalFlag] = useState(false);
  const [forModalJobList, setForModalJobList] = useState([]);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${selectedProgLang.toLowerCase()}`,
    );

    setIsLoading(false);
    setData(response.data);
    setDisplayData(response.data);
  };

  const filterJobs = () => {
    const filteredJobList = data.filter((item) => {
      const searchValue = text.toUpperCase();
      const jobTitle = item.title.toUpperCase();

      return jobTitle.indexOf(searchValue) > -1;
    });
    setDisplayData(filteredJobList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [text]);

  function onJobSelect(job) {
    setModalFlag(true);
    setSelectedJob(job);
  }

  const renderJobs = ({ item }) => (
    <JobItem job={item} onSelect={() => onJobSelect(item)} trash={false} />
  );

  const onJobSave = async () => {
    let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');



    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);

    savedJobList.findIndex((a) => a.id == selectedJob.id) !== -1
      ? alert('welcome')
      : (savedJobList = [...savedJobList, selectedJob]);

    setForModalJobList(savedJobList);

    AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(savedJobList));
  };

  return (
    <SafeAreaView style={jobs.safeArea}>
      <View style={{ flex: 1 }}>
        <Text style={jobs.title}>Jobs for {selectedProgLang}</Text>
        <SearchBar place="Search a job..." changeText={(x) => setText(x)} />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#FFF"
            style={{ marginTop: 300 }}
          />
        ) : null}

        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={displayData}
          renderItem={renderJobs}
        />
        <View style={jobs.buttonContainer}>
          <>
            <TouchableOpacity
              style={jobs.navButton}
              onPress={() => props.navigation.goBack()}>
              <Text style={jobs.buttonText}>
                <Icon name={'chevron-left'} size={20} />
              </Text>
            </TouchableOpacity>
          </>
          <>
            <TouchableOpacity
              style={jobs.navButton}
              onPress={() => props.navigation.navigate('SavedJobsPage')}>
              <Text style={jobs.buttonText}>Go to Favourites</Text>
            </TouchableOpacity>
          </>
        </View>

        <Modal
          isVisible={modalFlag}
          onBackdropPress={() => setModalFlag(false)}>
          <View style={jobs.modalContainer}>
            <Text style={jobs.modalTitle}>{selectedJob.title}</Text>
            <Text style={jobs.modalSubTitle}>{selectedJob.company}</Text>
            <Text style={jobs.modalSubTitle}>{selectedJob.location}</Text>
            <ScrollView style={jobs.modalScroll}>
              <HTMLView value={selectedJob.description} />
            </ScrollView>

            {forModalJobList.findIndex((a) => a.id == selectedJob.id) !== -1 ? (
              <TouchableOpacity
                style={jobs.saveButton}
                onPress={() => setModalFlag(false)}>
                <Text style={jobs.saveButtonText}>Close</Text>
              </TouchableOpacity>
            ) : (
                <TouchableOpacity style={jobs.saveButton} onPress={onJobSave}>
                  <Text style={jobs.saveButtonText}>Add to Favourites</Text>
                </TouchableOpacity>
              )}
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export { Jobs };

