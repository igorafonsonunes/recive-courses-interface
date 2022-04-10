import React from "react";
import ICourse from "../../interfaces/courses";
import '../card/card.css';


export default function Card(props: ICourse){
    function formatDate(data: Date){
        return data.toLocaleDateString();
    }
     
    return (
            <div className="div-card" key={props.id}>
                <div className="head-card">
                    <h5>Cadastrado em {formatDate(new Date(props.date_time))}</h5>
                </div>
                <div className="body-card">
                    <p>{props.description_course}</p>
                </div>
                <div className="footer-card">
                    <button className="btn-acessar-curso" onClick={() => window.open(props.url_link, '_blank')}> 
                        Acessar Curso
                    </button>
                </div>
            </div>
      )
}