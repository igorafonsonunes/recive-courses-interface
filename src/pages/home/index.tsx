import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import NavBar from "../../components/navbar";
import ICourse from "../../interfaces/courses";
import Service from "../../service/service.api";
import './home.css';

export default function Home(){
    const [courses, setCourses] = useState<ICourse[]>([]);

    useEffect(() =>{
        async function getCourses(){
            const service = new Service().service;
            const response = await service.get('/course');
            setCourses((response.data as unknown) as ICourse[]);
        }
        getCourses();
    },[]);

    return (
        <div className="home-container">
            <NavBar />
            <h1>Cursos</h1>
            <div className="container">
                <ul>
                    {
                        courses.length > 0 ?
                        courses.map(course => {
                            return( 
                                <li key={course.id}>
                                    <Card id={course.id} 
                                        description_course={course.description_course} 
                                        url_link={course.url_link} 
                                        date_time={course.date_time}/>
                                </li>)
                        }) : <li>Não possuimos cursos cadastrados no dia de hoje.</li>
                    }
                </ul>
            </div>
        </div>
    );
}