import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function NewsDetails() {
    const { noticias } = useContext(NewsContext);
    const { id } = useParams();

    return (
        <>
        <ul>
            <li>Titulo: {noticias[id].titulo}</li>
            <li>Contenido: {noticias[id].contenido}</li>
            <li>Categoria: {noticias[id].categoria}</li>
            <li>Autor: {noticias[id].autor}</li>
            <li>Fecha de noticia: {noticias[id].fecha}</li>
        </ul>

        <Link to={"/"}>Volver</Link>
        </>
    );
};
