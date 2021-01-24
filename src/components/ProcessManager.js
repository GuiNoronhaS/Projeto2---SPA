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
            <Box>
                <TextField
                    id="assunto"
                    label="Assunto"
                    placeholder="Digite o Assunto"
                    multiline={false}
                    variant="standard"
                    margin="none"
                    component={Card}
                    value= {props.acao === "Editar esse Processo" ? props.processo.assunto : "" }
                    onChange={handleAssunto}
                />
            </Box>
            <Box>
                <Typography>Interessados</Typography>
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
            <Box>
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
            <Box>
                <TextField
                    id="descricao"
                    label="Descrição"
                    placeholder="Digite a Descrição"
                    multiline={true}
                    rows="5"
                    variant="standard"
                    margin="none"
                    value= {props.acao === "Editar esse Processo" ? props.processo.descricao : "" }
                    component={Card}
                    onChange={handleDescricao}
                />
            </Box>
            <Grid container spacing={10}>
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        disableElevation
                        color="primary"
                        onClick={setMsg}
                    >
                        Salvar
                    </Button>
                </Grid>
            </Grid>
            <ShowMsg
                open={openMsg}
                reject={setMsg}
                confirm={() => props.handleSalvar({
                    "descricao" : descricao, 
                    "assunto" : assunto, 
                    "interessados" : interessadoLista
                })}
                acao={props.acao}
            />
        </Card>
    );
};

export default ProcessManager