import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customText";

const EditNote = ({ setCurrentPage, editNote, currentNote }) => {
  const [title, setTitle] = useState(currentNote ? currentNote.title : "");
  const [desc, setDesc] = useState(currentNote ? currentNote.desc : "");

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Title"
        placeHolder="Title"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Description"
        placeHolder="Description"
        numberOfLines={4}
        multiline={false}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Save"
          width="100%"
          onPress={() => {
            editNote(currentNote.id, title, desc);
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Back to Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default EditNote;
