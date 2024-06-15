import { StyleSheet, View } from "react-native";
import { useState } from "react";
import HomeScreen from "./src/screens/homeScreen";
import EditNoteScreen from "./src/screens/editNote";
import AddNoteScreen from "./src/screens/addNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  editNote,
  currentNote,
  setCurrentNote,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <HomeScreen
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setCurrentNote={setCurrentNote}
        />
      );
    case "add":
      return (
        <AddNoteScreen setCurrentPage={setCurrentPage} addNote={addNote} />
      );
    case "edit":
      return (
        <EditNoteScreen
          setCurrentPage={setCurrentPage}
          editNote={editNote}
          currentNote={currentNote}
        />
      );
    default:
      return <HomeScreen />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentNote, setCurrentNote] = useState(null);
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "First Note",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      title: "Second Note",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 3,
      title: "Third Note",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  const editNote = (id, newTitle, newDesc) => {
    const updatedNotes = noteList.map((note) =>
      note.id === id ? { ...note, title: newTitle, desc: newDesc } : note
    );
    setNoteList(updatedNotes);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      currentNote={currentNote}
      setCurrentNote={setCurrentNote}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 40,
  },
});

export default App;
