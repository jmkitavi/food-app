import { StyleSheet, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
    margin: 7,
    paddingHorizontal: 5,
    height: 300
  },
  itemName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 40,
  },
  divider: {
    backgroundColor: 'orange',
    height: 4,
  },
  contentTitle: {
    color: "black",
    fontSize: 15,
    lineHeight: 30,
  },
  bottomContainer: {
    backgroundColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 130,
    height: 34,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 17,
  },
  addText: {
    color: 'black',
    fontWeight: 'bold',
  }
})


export default styles