const recordAttendance = async (attendanceData) => {
    try {
      await firestore.collection("attendance").add(attendanceData);
      console.log("Attendance recorded successfully!");
    } catch (error) {
      console.error("Error recording attendance: ", error);
    }
  };
  