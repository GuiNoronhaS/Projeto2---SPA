import { Paper, Grid, Box, Typography } from "@material-ui/core";

function ShowProcess(props) {
    return (
        <Paper>
            <Grid>
                <Grid>
                    <img src={PlaceholderNoImg} alt="Sem Imagem" />
                </Grid>
                <Grid>
                    <Grid>
                        <Typography>Processo</Typography>
                        <Typography>{props.processo.numero}</Typography>
                    </Grid>
                    <Grid>
                        <Typography>Data</Typography>
                        <Typography>{props.processo.entrada}</Typography>
                    </Grid>
                    <Grid>
                        <Typography>Assunto</Typography>
                        <Typography>{props.processo.assunto}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Box>
                <Typography>Interessados</Typography>
                <Grid container spacing={1}>
                    {props.processo.interessados.map(nome => 
                            <Grid item xs={interessadoLista.length >= 5 ? 4 : 12} key={nome}>
                                <Typography>{nome}</Typography>
                            </Grid>)
                    }
                </Grid>
            </Box>
            <Box>
                <Typography>Descrição</Typography>
                <Typography>{props.processo.descricao}</Typography>
            </Box>
        </Paper>
    );
}

export default ShowProcess