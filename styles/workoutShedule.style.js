import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  back: {
    paddingBottom: 50,
  },
  content: {
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 20,
    minHeight: 'auto',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "25%" /* You must set a specified height */,
    backgroundPosition: "center" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize: "cover",
    width: "100%",
    borderLeftBottom: 25,
    borderRightBottom: 25,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  sheulePageHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    marginTop:70
  },
  sheduleOptionsButton: {
    marginTop: 20,
    marginBottom: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  fillRedBtn: {
    backgroundColor: "#E54646",
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 7,
    borderRadius: 5,
  },
  fillWhiteBtn: {
    backgroundColor: "white",
    color: "#E54646",
    fontWeight: "bold",
    textTransform: "none",
    borderColor: "white",
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 7,
    borderRadius: 5,
    marginLeft: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnIcon: {
    color: "white",
  },
  btnText1: {
    color: "#E54646",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnIcon1: {
    color: "#E54646",
  },
  sheduleActivity: {
    fontWeight: "bold",
    color: "#dcdfe2",
    fontSize: 20,
  },
  sheduleActivityType: {
    // fontWeight: "bold",
    color: "#E54646",
    fontSize: 20,
  },
  sheduleActivityQty: {
    // fontWeight: "bold",
    color: "#dcdfe2",
    fontSize: 18,
  },
  addNoteBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allbuttons:{
    flexDirection: "row",
  },
  editDelete:{
    padding: 10,
  },
  editDeleteIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  individualOptionIconEdit: {
    color: "#dcdfe2",
    fontSize: 20,
    cursor: "pointer",
  },
  individualOptionIconDelete: {
    color: "#dcdfe2",
    fontSize: 25,
    cursor: "pointer",
  },
  individualOptionIconDate: {
    backgroundColor: "#E54646",
    color: "#dcdfe2",
    padding: 5,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    cursor: "pointer",
  },
  individualWork: {
    backgroundColor: "rgba(34, 34, 34, 0.88)",
    padding: 10,
    borderRadius: 10,
    paddingLeft: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  fillBlueBtn: {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 7,
    borderRadius: 5,
  },
  editFormBtn: {
    alignItems: "flex-start", // Left-align the child components
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 20,
  },
  setsReps: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Semi-transparent background
  },
  modalContent: {
    width: '80%', 
    height: '30%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    fontWeight: 'bold',
  },
  confirmationText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    marginTop:30
    },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 5,
    fontSize: 20,
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: 40,
  },
  closeButtonText: {
    color: 'blue', // Customize the text color
    fontSize: 16, // Customize the font size
  },
  deleteButton: {
    backgroundColor: '#E54646', // Customize the button background color
    borderRadius: 4,
    padding: 12,
    marginTop: 20,
  },
  deleteButtonText: {
    color: '#ffffff', // Customize the button text color
    fontSize: 20, // Customize the button text font size
    textAlign: 'center',
  },

  // model for the edit form
  modalContent2: {
    width: '80%', 
    height: '60%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    fontWeight: 'bold',
  },
  editForm: {
    marginTop: 16,
  },
  editFormLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  editFormInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    padding: 1,
    fontSize: 15,
    marginBottom: 16,
  },
  saveButton: {
    marginTop:10,
    backgroundColor: '#E54646',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;



  
