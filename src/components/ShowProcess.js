import { Button, IconButton, Grid, Box, Typography, Paper } from "@material-ui/core";
import { Close } from '@material-ui/icons';
import { useState } from "react";
import PlaceholderNoImg from '../assets/img/PlaceholderNoImg.png';
import ShowMsg from './ShowMsg.js';

function ShowProcess(props) {

    const [openMsg, setOpenMsg] = useState(false);

    const handleOpen = () => {
        setOpenMsg(!openMsg);
    }

    return (
        <Box
            component={Paper}
            elevation={5}
            className={props.listagemStyle}>
            <Box
                display="flex"
                flexDirection="row">
                <Box className={props.startMarginPadding}>
                    <img src={PlaceholderNoImg} alt="Sem Imagem" />
                </Box>
                <Grid container space={12}>
                    <Grid className={props.marginPadding} xs={5}>
                        <Typography variant="subtitle1">Processo</Typography>
                        <Typography>{props.processo.numero}</Typography>
                    </Grid>
                    <Grid className={props.marginPadding} xs={5}>
                        <Typography variant="subtitle1">Data</Typography>
                        <Typography>{props.processo.entrada}</Typography>
                    </Grid>
                    <Grid className={props.marginPadding} xs={5}>
                        <Typography variant="subtitle1">Assunto</Typography>
                        <Typography>{props.processo.assunto}</Typography>
                    </Grid>
                </Grid>
                <Box className={props.endMarginPadding}>
                    <IconButton onClick={props.closeButton}>
                        <Close />
                    </IconButton>
                </Box>
            </Box>
            <Box className={props.marginPadding}>
                <Typography variant="subtitle1">Interessados</Typography>
                <Grid container spacing={1}>
                    {props.processo.interessados?.map(nome =>
                        <Grid item xs={props.processo.interessados.length >= 5 ? 4 : 12} key={nome}>
                            <Typography>{nome}</Typography>
                        </Grid>)
                    }
                </Grid>
            </Box>
            <Box className={props.marginPadding}>
                <Typography variant="subtitle1">Descrição</Typography>
                <Typography >{props.processo.descricao}</Typography>
            </Box>
            <Box className={props.endMarginPadding}>
                <Button variant="contained" disableElevation className={props.padraoBotoes}
                    onClick={handleOpen}
                >Deletar</Button>
                <Button color="primary" variant="contained" disableElevation className={props.padraoBotoes}
                    onClick={() => props.editarProcess(props.processo.id)}
                >Editar</Button>
            </Box>
            <ShowMsg
                open={openMsg}
                reject={handleOpen}
                confirm={() => props.deleteProcess(props.processo.id)}
                acao={'Deletar esse Processo'}
            />
        </Box >
    );
}

export default ShowProcess