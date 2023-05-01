import Api from "../components/Api"
import Contexto from "../contexto"
import { useContext } from "react";
import Card from "../components/Card";
const Favoritos = () =>{

    const liked = (id, liked) => {
        const fotosactualizado = fotos.map(foto => {
            if(liked == false){}
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

    const {fotos, setfotos} = useContext(Contexto)
    return(
    <>
    <div className="cards p-5">
    {
            fotos.map(function(element){
                if(element.liked === true)
                return <Card ClassName="col-3" key={element.id} imgurl={element.src.portrait} liked={element.liked ? <i className="fa-solid fa-heart" onClick={() => disLiked(element.id)}></i> : <button type="button" className="btn btn-dark" onClick={() => liked(element.id,element.liked)}>Me gusta</button>} photographer={element.photographer}></Card>
            })
    }
    </div>
    </>
)
}
export default Favoritos