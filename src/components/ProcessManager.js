import { Box, Button, Card, Grid, Typography, IconButton } from "@material-ui/core";
import { Close } from '@material-ui/icons';

import TextFieldGenerator from "./TextFieldGenerator";
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
                <TextFieldGenerator
                    id="assunto"
                    label="Assunto"
                    placeholder="Digite o Assunto"
                    multiline={false}
                    variant="standard"
                    margin="none"
                    InputProps={{}}
                    component={Card}
                />
            </Box>
            <Box width='40%'>
                Interessados
                </Box>
            <Box width='80%'>
                <Grid container space={10}>
                    <Grid item xs={6}>
                        <TextFieldGenerator
                            id="novosinteressados"
                            label="Novos Interessados"
                            placeholder="Digite os Interessados"
                            multiline={false}
                            variant="standard"
                            margin="none"
                            InputProps={{}}
                            component={Card}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            disableElevation
                        >
                            Adicionar
                    </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box width='95%'>
                <TextFieldGenerator
                    id="descricao"
                    label="Descrição"
                    placeholder="Digite a Descrição"
                    multiline={true}
                    rows="5"
                    variant="standard"
                    margin="none"
                    InputProps={{}}
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