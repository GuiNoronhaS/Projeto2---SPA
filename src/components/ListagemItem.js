import { ListItem, Card } from "@material-ui/core";


function ListagemItem(props) {
    return (
        <ListItem key={props.id}>
            <Card>
                <Grid container spacing={10}>
                    <Grid item xs={2}>
                        /*Icon*/
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>Número</Typography>
                        <Typography>{props.numero}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>Assunto</Typography>
                        <Typography>{props.assunto}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>Interessado</Typography>
                        <Typography>{props.interessado[0]}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography>Descrição</Typography>
                        <Typography>{props.descricao}</Typography>
                    </Grid>
                </Grid>
            </Card>
        </ListItem>

    );
};

export default ListagemItem