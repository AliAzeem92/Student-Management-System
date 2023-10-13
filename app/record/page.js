const getAttendanceRecords = async (courseId) => {
    try {
      const attendanceSnapshot = await firestore
        .collection("attendance")
        .where("courseId", "==", courseId)
        .get();
      const attendanceRecords = attendanceSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return attendanceRecords;
    } catch (error) {
      console.error("Error getting attendance records: ", error);
      return [];
    }
  };
  