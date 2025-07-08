const roleData = {
  admin: {
    Dashboard: "Welcome, Admin! You can manage departments, faculty, and students.",
    Departments: "Manage college departments here.",
    Faculty: "View and assign faculty tasks and schedules.",
    Students: "Manage student records and enrollment.",
    Reports: "Generate academic and attendance reports."
  },
  faculty: {
    Dashboard: "Welcome, Faculty! Here's your quick overview.",
    "My Schedule": "See your weekly lecture schedule.",
    Subjects: "Subjects assigned to you.",
    Attendance: "Mark and review student attendance."
  },
  student: {
    Dashboard: "Welcome, Student! This is your home screen.",
    "My Timetable": "Check your daily class schedule.",
    "My Profile": "Update your profile details.",
    Attendance: "View your attendance statistics."
  }
};

exports.getRoleDashboard = (req, res) => {
  const role = req.params.role.toLowerCase();

  if (!roleData[role]) {
    return res.status(404).json({ error: `Role '${role}' not found.` });
  }

  res.json({
    role: role,
    data: roleData[role]
  });
};
