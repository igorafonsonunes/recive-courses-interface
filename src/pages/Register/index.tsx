import React, {FormEvent, useState} from "react";
import NavBar from "../../components/navbar";
import Service from "../../service/service.api";
import '../Register/register.css';

interface ICourse{
    description_course: string,
    url_link: string
}

export default function Register(){
    const [urlLink, setUrlLink]= useState<string>('');
    const [description, setDescription]= useState<string>('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const service = new Service().service;
        try {
            const data: ICourse = {
                url_link: urlLink,
                description_course: description
            };
    
            const response = await service.post('course', data);
            if(response.data.id)
                alert(`Seu curso foi criado com sucesso`);
            else
                alert(`Erro no cadastro, tente novamente. Error: ` + response.data)

            if(response.data.id){
                setUrlLink('');
                setDescription('');
            }
        } catch(error){
            alert('Erro no cadastro, tente novamente. Error:' + error);
        }
    }

    return(
        <div>
            <NavBar />
            <div className="container-register">
                <div className="register-body">
                    <h1>Cadastrar Cursos</h1>
                    <p>Faça o cadastro dos cursos gratuitos que você tem para compartilhar.</p>
                    <form onSubmit={handleSubmit}>
                        <label>Link do curso</label>
                        <input
                            value={urlLink}
                            maxLength={255}
                            onChange={e => setUrlLink(e.target.value)}
                        />

                        <label>Descrição</label>
                        <textarea maxLength={255} value={description} onChange={e => setDescription(e.target.value)}/>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}