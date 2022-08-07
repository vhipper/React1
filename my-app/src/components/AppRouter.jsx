import React, {useContext} from 'react';
import {Navigate, Route, Routes, } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
        ?
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/404" element={<Error />} />
                <Route path="/posts/:id" element={<PostIdPage />} />
                <Route path="login" element={<Navigate replace to="/posts" />} />
            </Routes>
            :
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="posts" element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;





