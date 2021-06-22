import React, { useState, useContext } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  isPlatform,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { addOutline } from "ionicons/icons";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";
import CoursesContext from '../data/courses-context';

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + React - The Practical Guide",
    enrolled: new Date("03/22/2020"),
    goals: [
      { id: "c1g1", text: "Finish the course" },
      { id: "c1g2", text: "Learn a lot!" },
    ],
  },
  {
    id: "c2",
    title: "React - The Complete Guide",
    enrolled: new Date("06/18/2020"),
    goals: [
      { id: "c2g1", text: "Do your best" },
      { id: "c2g2", text: "Maybe learn a bit..." },
    ],
  },
  {
    id: "c3",
    title: "JavaScript - The Complete Guide",
    enrolled: new Date("12/05/2020"),
    goals: [
      { id: "c3g1", text: "Eat sleep code" },
      { id: "c3g2", text: "Be like Elon" },
      { id: "c3g3", text: "Eat sleep code" },
      { id: "c3g4", text: "Be like Elon" },
      { id: "c3g5", text: "Eat sleep code" },
      { id: "c3g6", text: "Be like Elon" },
      { id: "c3g7", text: "Eat sleep code" },
      { id: "c3g8", text: "Be like Elon" },
      { id: "c3g9", text: "Eat sleep code" },
      { id: "c3g10", text: "Be like Elon" },
      { id: "c3g11", text: "Eat sleep code" },
      { id: "c3g12", text: "Be like Elon" },
      { id: "c3g13", text: "Eat sleep code" },
      { id: "c3g14", text: "Be like Elon" },
    ],
  },
];

const Courses: React.FC = () => {
  // const history = useHistory();
  // const changePageHandler = () => {
  //   history.push('/course-goals')
  // };
  const [isAdding, setIsAdding] = useState(false);
  const coursesCtx = useContext(CoursesContext);

  const startAddCourseHandler = () => {
    setIsAdding(true);
  };

  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };

  const courseAddHandler = (title: string, date: Date) => {
    coursesCtx.addCourse(title, date);
    setIsAdding(false);
  };

  return (
    <React.Fragment>
      <AddCourseModal show={isAdding} onCancel={cancelAddCourseHandler} onSave={courseAddHandler} />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddCourseHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {coursesCtx.courses.map((course) => (
              <IonRow key={course.id}>
                <IonCol size-md="4" offsetMd="4">
                  <CourseItem title={course.title} id={course.id} enrolmentDate={course.enrolled} />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Courses;