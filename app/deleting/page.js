const deleteStudent = async (studentId) => {
    try {
      await firestore.collection("students").doc(studentId).delete();
      console.log("Student deleted successfully!");
    } catch (error) {
      console.error("Error deleting student: ", error);
    }
  };
  