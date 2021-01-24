import { Box, Button, Card, Grid, Typography, IconButton, TextField } from "@material-ui/core";
import { Close } from '@material-ui/icons';

import ShowMsg from './ShowMsg.js';
import { useState } from "react";

function ProcessManager(props) {
    const [openMsg, setOpenMsg] = useState(false);

    const handleSalvar = () => {
        setOpenMsg(true);
    }

    const setMsgFalse = () => {
        setOpenMsg(false);
    }
    
    const [interessado, setInteressado] = useState('');
    const [interessadoLista, setInteressadoLista] = useState([]);

    const addInteressado = (novoInteressado) => {
        const lista = interessadoLista;
        lista.push(novoInteressado);
        setInteressadoLista(lista);
    }

    return (
        <Card
            raised={true}
        >
            <Grid container space={12}>
                <Grid item xs={11}>
                    <Typography>Cadastro de Processos</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={props.closeButton}>
                        <Close />
                    </IconButton>
                </Grid>
            </Grid>
            <Box width='40%'>
                <TextField
                    id="assunto"
                    label="Assunto"
                    placeholder="Digite o Assunto"
                    multiline={false}
                    variant="standard"
                    margin="none"
                    component={Card}
                />
            </Box>
            <Box width='40%'>
                <Typography>Interessados</Typography>
                <Grid container spacing={1}>
                    {interessadoLista?.map(nome => 
                            <Grid item xs={interessadoLista.length >= 5 ? 4 : 12} key={nome}>
                                <Typography>{nome}</Typography>
                            </Grid>)
                    }
                </Grid>
                </Box>
            <Box width='80%'>
                <Grid container space={10}>
                    <Grid item xs={6}>
                        <TextField
                            id="novosinteressados"
                            label="Novos Interessados"
                            placeholder="Digite os Interessados"
                            multiline={false}
                            variant="standard"
                            margin="none"
                            onChange={e => setInteressado(e.target.value)}
                            component={Card}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            disableElevation
                            onClick={() => addInteressado(interessado)}
                        >
                            Adicionar
                    </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box width='95%'>
                <TextField
                    id="descricao"
                    label="Descrição"
                    placeholder="Digite a Descrição"
                    multiline={true}
                    rows="5"
                    variant="standard"
                    margin="none"
                    component={Card}
                />
            </Box>
            <Grid container spacing={10}>
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        disableElevation
                        onClick={handleSalvar}
                    >
                        Salvar
                    </Button>
                </Grid>
            </Grid>
            <ShowMsg
                open={openMsg}
                reject={setMsgFalse}
                confirm={setMsgFalse}
                acao={props.acao}
            />
        </Card>
    );
};

export default ProcessManager