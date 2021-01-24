import { List } from "@material-ui/core";
import ListagemItem from "./ListagemItem";


function Listagem(props) {
    return (
        <List
            onSelect={props.onSelect}
        >
            {props.lista.map(processo => (
                <ListagemItem
                    key={processo.id}
                    numero={processo.numero}
                    assunto={processo.assunto}
                    interessados={processo.interessados}
                    descricao={processo.descricao}
                >
                </ListagemItem>
            ))}
        </List>

    );
};

export default Listagem
/*
{
    "id": "04c7197f-c0fe-4dab-b27c-d69611eca40f",
    "numero": "SOFT 2018/00008",
    "entrada": "07/08/2018",
    "descricao": "Solicitação de licença-prêmio",
    "assunto" : "Licença",
    "interessados": ["Edmilson Cherem"]
}
*/