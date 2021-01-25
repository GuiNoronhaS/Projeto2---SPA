import { Box, Button, Card, Grid, Typography, IconButton, TextField } from "@material-ui/core";
import { Close } from '@material-ui/icons';

import ShowMsg from './ShowMsg.js';
import { useState } from "react";

function ProcessManager(props) {
    const [openMsg, setOpenMsg] = useState(false);

    const setMsg = () => {
        setOpenMsg(!openMsg);
    }

    const [assunto, setAssunto] = useState('')
    const [descricao, setDescricao] = useState('')

    const handleAssunto = (valor) => {
        setAssunto(valor)
    }
    const handleDescricao = (valor) => {
        setDescricao(valor)
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
            className={props.listagemStyle}
        >
            <Grid container space={12}>
                <Grid className={props.marginPadding} item xs={10}>
                    <Typography variant="h2">Cadastro de Processos</Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={props.closeButton}>
                        <Close />
                    </IconButton>
                </Grid>
            </Grid>
            <Box className={props.marginPadding}>
                <TextField
                    className={props.textField48}
                    id="assunto"
                    label="Assunto"
                    placeholder="Digite o Assunto"
                    multiline={false}
                    variant="standard"
                    margin="none"
                    component={Card}
                    defaultValue={props.acao === "Editar esse Processo" ? props.processo.assunto : ""}
                    onChange={e => handleAssunto(e.target.value)}
                />
            </Box>
            <Box className={props.marginPadding}>
                <Typography variant="subtitle1">Interessados</Typography>
                <Grid container spacing={1}>
                    {props.acao === "Editar esse Processo" &&
                        props.processo.interessados?.map(nome =>
                            <Grid item xs={interessadoLista.length >= 5 ? 4 : 12} key={nome}>
                                <Typography>{nome}</Typography>
                            </Grid>)
                    }
                    {interessadoLista?.map(nome =>
                        <Grid item xs={interessadoLista.length >= 5 ? 4 : 12} key={nome}>
                            <Typography>{nome}</Typography>
                        </Grid>)
                    }
                </Grid>
            </Box>
            <Box className={props.marginPadding}>
                <Grid container space={10}>
                    <Grid item xs={6}>
                        <TextField
                            className={props.textField95}
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
            <Box className={props.marginPadding}>
                <TextField
                    className={props.textField100}
                    id="descricao"
                    label="Descrição"
                    placeholder="Digite a Descrição"
                    multiline={true}
                    rows="5"
                    variant="standard"
                    margin="none"
                    defaultValue={props.acao === "Editar esse Processo" ? props.processo.descricao : ""}
                    component={Card}
                    onChange={e => handleDescricao(e.target.value)}
                />
            </Box>
            <Box className={props.endMarginPadding} >
                <Button
                    className={props.padraoBotoes}
                    variant="contained"
                    disableElevation
                    color="primary"
                    onClick={setMsg}
                >
                    Salvar
                    </Button>
            </Box>
            <ShowMsg
                open={openMsg}
                reject={setMsg}
                confirm={() => props.handleSalvar({
                    "descricao": descricao,
                    "assunto": assunto,
                    "interessados": interessadoLista
                })}
                acao={props.acao}
            />
        </Card>
    );
};

export default ProcessManager