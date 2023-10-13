const getStudents = async () => {
    try {
      const studentsSnapshot = await firestore.collection("students").get();
      const students = studentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return students;
    } catch (error) {
      console.error("Error getting students: ", error);
      return [];
    }
  };
  