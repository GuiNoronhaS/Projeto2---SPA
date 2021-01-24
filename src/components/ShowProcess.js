import { Button, Grid, Box, Typography, Paper } from "@material-ui/core";
import PlaceholderNoImg from '../assets/img/PlaceholderNoImg.png';

function ShowProcess(props) {
    return (
        <Box 
            component={Paper}
            elevation={5}>
            <Grid>
                <Grid>
                    <img src={PlaceholderNoImg} alt="Sem Imagem" />
                </Grid>
                <Grid>
                    <Grid>
                        <Typography variant="subtitle1">Processo</Typography>
                        <Typography>{props.processo.numero}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1">Data</Typography>
                        <Typography>{props.processo.entrada}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1">Assunto</Typography>
                        <Typography>{props.processo.assunto}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Box>
                <Typography variant="subtitle1">Interessados</Typography>
                <Grid container spacing={1}>
                    {props.processo.interessados?.map(nome =>
                        <Grid item xs={props.processo.interessados.length >= 5 ? 4 : 12} key={nome}>
                            <Typography>{nome}</Typography>
                        </Grid>)
                    }
                </Grid>
            </Box>
            <Box>
                <Typography variant="subtitle1">Descrição</Typography>
                <Typography>{props.processo.descricao}</Typography>
            </Box>
            <Box>
                <Button  variant="contained" disableElevation className={props.padraoBotoes}>Deletar</Button>
                <Button  color="primary" variant="contained" disableElevation className={props.padraoBotoes}>Editar</Button>
            </Box>
        </Box>
    );
}

export default ShowProcess