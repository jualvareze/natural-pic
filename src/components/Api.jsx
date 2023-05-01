import { useEffect, useState } from "react";
import Contexto from "../contexto";
import Card from "./Card";
import { useContext } from "react";
const Api = () => {

    const { fotos, setfotos } = useContext(Contexto)


    const liked = (id, liked) => {
        const fotosactualizado = fotos.map(foto => {
            if (liked == false) { }
            if (foto.id === id) {
                return {
                    ...foto,
                    liked: true,
                };
            } else {
                return foto;
            }
        });
        setfotos(fotosactualizado);
    };

    const disLiked = (id) => {
        const fotosactualizado = fotos.map(foto => {
            if (foto.id === id) {
                return {
                    ...foto,
                    liked: false,
                };
            } else {
                return foto;
            }
        });
        setfotos(fotosactualizado);
    };


    return (
        <>
            <div className="cards p-5">
                {
                    fotos.map(function (element) {
                        return <Card ClassName="col-3" key={element.id} imgurl={element.src.portrait} liked={element.liked ? <i className="fa-solid fa-heart" onClick={() => disLiked(element.id)}></i> : <button type="button" className="btn btn-dark" onClick={() => liked(element.id, element.liked)}>Me gusta</button>} photographer={element.photographer}></Card>
                    })
                }
            </div>
        </>
    )
}
export default Api