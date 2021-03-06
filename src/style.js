import { StyleSheet, Dimensions } from 'react-native';

export const topicItem = StyleSheet.create({
  container: {
    padding: 16,
    width: 150,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export const intro = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#feca57',
  },
  bannerTop: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerBottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#0f1111',
    textAlign: 'center',
    marginVertical: 50,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
  },
  scrollArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export const jobs = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#c8d6e5',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#0f1111',
    textAlign: 'center',
    marginVertical: 40,
  },
  modalContainer: {
    backgroundColor: '#feca57',
    margin: 8,
    padding: 10,
    paddingTop: 14,
    borderWidth: 2,
    borderColor: '#0f1111',
    borderRadius: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0f1111',
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalScroll: {
    height: Dimensions.get('screen').height * 0.3,
    padding: 10,
    borderWidth: 2,
    borderColor: '#020202',
    borderRadius: 8,
    marginVertical: 12,
  },
  saveButton: {
    backgroundColor: '#020202',
    padding: 10,
    borderRadius: 8,
    marginVertical: 12,
  },
  saveButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    width: '90%',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navButton: {
    backgroundColor: '#feca57',
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    width: 150,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#576574',
    textAlign: 'center',
  },
});

export const jobItem = StyleSheet.create({
  container: {
    margin: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
    backgroundColor: '#222f3e',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#feca57',
  },
  desc: {
    fontSize: 16,
    fontWeight: '500',
    color: '#c8d6e5',
  },
  trash: {
    position: 'absolute',
    top: 26,
    right: 20,
  },
});

export const saved_jobs = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#c8d6e5',
  },
  container: { flex: 1 },

  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#020202',
    textAlign: 'center',
    marginVertical: 40,
  },
  BackButton: {
    backgroundColor: '#feca57',
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 10,
    left: 9,
    width: 150,
  },
  BackButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#576574',
    textAlign: 'center',
  },
});

export const searchBar = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#eceff1',
    marginHorizontal: 10,
    paddingLeft: 12,
    marginBottom: 12,
  },
  text: {
    color: '#576574',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
