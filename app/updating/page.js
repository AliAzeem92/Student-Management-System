const updateStudent = async (studentId, updatedData) => {
    try {
      await firestore.collection("students").doc(studentId).update(updatedData);
      console.log("Student updated successfully!");
    } catch (error) {
      console.error("Error updating student: ", error);
    }
  };
  