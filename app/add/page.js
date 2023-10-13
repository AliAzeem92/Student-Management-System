import { firestore } from "./firebase";

const addStudent = async (studentData) => {
  try {
    await firestore.collection("students").add(studentData);
    console.log("Student added successfully!");
  } catch (error) {
    console.error("Error adding student: ", error);
  }
};
