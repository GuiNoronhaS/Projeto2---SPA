import { ListItem, Card, Grid, Typography } from "@material-ui/core";
import PlaceholderNoImg from '../assets/img/PlaceholderNoImg.png'


function ListagemItem(props) {
    return (
        <ListItem key={props.id}>
            <Card>
                <Grid container spacing={10}>
                    <Grid item xs={2}>
                        <img src={PlaceholderNoImg} alt="Sem Imagem"/>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">Número</Typography>
                        <Typography>{props.numero}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">Assunto</Typography>
                        <Typography>{props.assunto}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">Interessado</Typography>
                        <Typography>{props.interessados[0]}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">Descrição</Typography>
                        <Typography>{props.descricao}</Typography>
                    </Grid>
                </Grid>
            </Card>
        </ListItem>

    );
};

export default ListagemItem