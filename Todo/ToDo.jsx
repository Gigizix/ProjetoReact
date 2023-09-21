import { useState } from "react";
import { Link } from "react-router-dom";
import "style..css"

export default function ToDo() {
   const [tipodeflor, setTipodeflor ] = useState("");
   const [cor, setCor ] = useState("");
   const [preco, setPreco ] = useState("");
   const [set, setLista ] = useState([]);
   const [id, setId] = useState(1);
    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                tipodeflor: tipodeflor, 
                cor:cor, 
                preco: preco, 
                id: id
        }]);
        setId(id + 1);
        setTipodeflor("");
        setCor("");
        setPreco("");
       setLista("");
        console.log(id)
    };

    const remover = (id) => {
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id){
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }

    return (
        <div class="estilizando">
            <Link to="/">home</Link>
            <h2 class="txt">Floricultura Pequeno Jardim </h2> 
            <div>
            <form onSubmit={salvar}>

             <p className="txt-input"><b>Selecione um tipo de flor:</b></p>
            <input value={tipo} type="text"
            onChange={(e)=>{ setTipo(e.target.value)}}/>

            <p className="txt-input"><b>Selecione uma cor:</b></p>
             <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/> 

            <p className="txt-input"><b>Escolha o Preço que Deseja:</b></p>
            <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>

            <button className="btn">ADD</button>   
            </form>
        </div>         
         
            {lista.map((ativ)=>
            <div key= {ativ.id}>

                <p>Tipodeflor: {ativ.tipodeflor}</p>
                <p>Cpr:: {ativ.cor}</p>
                <p>Preço: R${ativ.preco}</p>
            
    
                <button onClick={() => remover(ativ.id)}><img src = "lixo.svg" alt="lixeira"/></button>

            </div>
        )} 
        </div>
    );
}