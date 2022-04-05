import React, { useEffect, useState } from "react";
import { dashContext } from "./dashContext";
import NewCourseDialog from "./../admin/dialogs/NewCourseDialog";
import { paginate } from "./../../utils/paginate";
import NewEditDialog from "./../admin/dialogs/NewEditDialog";
import DeletCourseDialog from "./../admin/dialogs/DeletCourseDialog";

const AdminContext = ({ children, courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [newCourseDialog, setNewCourseDialog] = useState(false);
  const [newEditDialog, setNewEditDialog] = useState(false);
  const [curruntCourse, setCurrentCourse] = useState({});
  const [newDeletCourseDialog, setnewDeletCourseDialog] = useState(false);
  const [curruntDeletCourse, setCurrentDeletCourse] = useState({});
  const [search, setSearch] = useState("");
  const [listCourse, setListCourse] = useState([]);

  useEffect(() => setListCourse(courses), [courses]);

  const filteredCourse = listCourse.filter((course) =>
    course.title.includes(search)
  );

  const openNewCourseDialog = () => setNewCourseDialog(true);

  const closeNewCourseDialog = () => setNewCourseDialog(false);

  const openNewEditDialog = (course) => {
    setNewEditDialog(true);
    setCurrentCourse(course);
  };

  const closeNewEditDialog = () => setNewEditDialog(false);

  const openDeletCourseDialog = (course) => {
    setnewDeletCourseDialog(true);
    setCurrentDeletCourse(course);
  };

  const closeDeletCourseDialog = () => setnewDeletCourseDialog(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const courseData = paginate(filteredCourse, currentPage, perPage);

  return (
    <dashContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        perPage,
        handlePageChange,
        courseData,
        openNewCourseDialog,
        openNewEditDialog,
        openDeletCourseDialog,
        filteredCourse,
        setSearch,
      }}
    >
      <NewCourseDialog
        showDialog={newCourseDialog}
        closeDialog={closeNewCourseDialog}
      />
      <NewEditDialog
        showEditDialog={newEditDialog}
        closeEditDialog={closeNewEditDialog}
        course={curruntCourse}
      />
      <DeletCourseDialog
        showDeletDialog={newDeletCourseDialog}
        closeDeletDialog={closeDeletCourseDialog}
        course={curruntDeletCourse}
      />

      {children}
    </dashContext.Provider>
  );
};

export default AdminContext;
