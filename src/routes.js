import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import {AgGrid,AgGridWithEnhancedClickOutside, HomePage,HomePageUser,DanaComponet} from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={DanaComponet} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);