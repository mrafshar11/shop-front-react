import { getCourses, newCourse, updateCourse, deleteCourse } from "./../services/courseService";
import { successMessage } from './../utils/message';

export const getAllCourses = () => {
    return async dispatch => {
        const { data } = await getCourses();
        await dispatch({ type: "INIT", payload: data.courses });
    };
};

export const creatNewCourse = (course) => {
    return async (dispatch, getState) => {
        const { data, status } = await newCourse(course);
        if (status === 201) successMessage("دوره با موفقیت ساخته شد");
        await dispatch({ type: "ADD_COURSE", payload: [...getState().courses, data.course] })
    }
}
export const creatNewEdit = (courseId, updatedCourse) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const updatedCourses = [...courses];
        const courseIndex = updatedCourses.findIndex(course => course._id == courseId)
        let course = updatedCourses[courseIndex];
        course = { ...Object.fromEntries(updatedCourse) };
        updatedCourses[courseIndex] = course;
        console.log(updatedCourses)


        try {
            await dispatch({ type: "UPDATE_COURSE", payload: [...updatedCourses] })
            const { data, status } = await updateCourse(courseId, updatedCourse);
            console.log(data)
            if (status === 200) successMessage("کاربر باموفقیت ویرایش شد")
        }
        catch (ex) {
            await dispatch({ type: "UPDATE_COURSE", payload: [...courses] })

        }

    }
}


export const DeletCourse = (courseId) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const filteredCourses = courses.filter(course => course._id !== courseId);

        try {
            await dispatch({ type: "DELETE_COURSE", payload: [...filteredCourses] });
            const { status } = await deleteCourse(courseId);
            if (status === 200) successMessage("دوره حذف شد");
        }
        catch (ex) {
            await dispatch({ type: "DELETE_COURSE", payload: [...courses] })
        }
    }
}


