import { ListItem, Card } from "@material-ui/core";


function ListagemItem(props) {
    return (
        <ListItem>
            <Card id={props.id}>
                <Grid container spacing={12}>
                    <Grid item xs={3}>
                        <Typography>Número</Typography>
                        <Typography>{props.numero}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>Assunto</Typography>
                        <Typography>{props.assunto}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>Interessado</Typography>
                        <Typography>{props.interessado[0]}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>Descrição</Typography>
                        <Typography>{props.descricao}</Typography>
                    </Grid>
                </Grid>

            </Card>
        </ListItem>

    );
};

export default ListagemItem