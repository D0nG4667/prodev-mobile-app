import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  searchFormGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 30,
    height: 60,
    paddingHorizontal: 20
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontWeight: '500',
    fontSize: 14,
  },
  searchControl: {
    padding: 0,
    margin: 0,
    fontSize: 12,
    color: '#7D7D7D'
  },
  searchButton: {
    backgroundColor: '#34967C',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    columnGap: 20
  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 5,
    marginRight: 15
  },
  listingContainer: {
     paddingHorizontal: 20,
     marginTop: 20
  },
  paginationContainer: {
      marginVertical: 20,
      alignItems: 'center'
  },
  showMoreButton: {
      backgroundColor: 'black',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10
  },
  showMoreButtonText: {
      color: 'white'
  }
});

export { styles };
