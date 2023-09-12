import { useState } from "react"
import Filme from "../filme/Filme"
import './Main.css'
type FilmesType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main(){
    //Hook
    const [texto, setTexto] = useState("Guilherme")

    const filmes:FilmesType[] = [
    {
        id:1,
        titulo: "Barbie",
        sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade." ,
        imagem: "/barbie.png"
    },
    {
        id:2,
        titulo:"Transformers",
        sinopse:" O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam.",
        imagem: "/filme_transformers.jpg"
    }
    ]

    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value) 
    }
    return(
        <>
        <div className="pesquisa">
            <p>Buscar filme</p>
            <input className='barrapesquisa' type="text" onChange={mudaTexto}/>
        <div>
            <p className='texto_digitado' >pesquisa: {texto}</p>
            </div>
        </div>

            <main className="content-main">
            <Filme titulo= "Barbie" sinopse= "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade." 
            imagem="/barbie.png"
            />

            <Filme titulo="Transformers" sinopse="O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam." 
            imagem="/filme_transformers.jpg"
            />

            <Filme titulo="Transformers" sinopse="O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam." 
            imagem="/filme_transformers.jpg"
            />

            <Filme titulo="Transformers" sinopse="O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam." 
            imagem="/filme_transformers.jpg"
            />

            <Filme titulo="Transformers" sinopse="O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam." 
            imagem="/filme_transformers.jpg"
            />
            
        </main>
        </>
    )
}