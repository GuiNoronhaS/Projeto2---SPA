import { ListItem, Card, Grid, Typography } from "@material-ui/core";
import PlaceholderNoImg from '../assets/img/PlaceholderNoImg.png';


function Listagem(props) {
    return (
        props.lista?.map(processo => (
            <ListItem
                className={props.className}
                key={processo.id}
                onClick={() => {
                    props.setProcessSelected(true)
                    props.setProcesso(processo)
                }}
            >
                <Card raised>
                    <Grid container spacing={10}>
                        <Grid item xs={2}>
                            <img src={PlaceholderNoImg} alt="Sem Imagem" />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1">Número</Typography>
                            <Typography>{processo.numero}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1">Assunto</Typography>
                            <Typography>{processo.assunto}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1">Interessado</Typography>
                            <Typography>{processo.interessados[0]}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1">Descrição</Typography>
                            <Typography>{processo.descricao}</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </ListItem>
        ))
    );
};

export default Listagem
