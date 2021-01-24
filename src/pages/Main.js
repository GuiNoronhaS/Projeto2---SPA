
import { makeStyles, Modal, Box, Card, InputAdornment, 
    Typography, Button, IconButton, CircularProgress } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useState } from 'react';
import ProcessManager from '../components/ProcessManager.js';
import TextFieldGenerator from '../components/TextFieldGenerator.js'
import Listagem from '../components/Listagem.js'

const useStyles = makeStyles({

    telaPrincipalBusca: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        margin: "auto",
    },
    telaPrincipalLista: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    telaListagem: {

    },

    buscaProcesso: {
        color: "#005b95",
        margin: 5,
        padding: 10,
    },
    buscaProcessoNoColor: {
        width: 100,
        margin: 5,
        padding: 10,
    },
    campoDeBusca: {
        margin: 15,
        minWidth: 550,
    },

    padraoBotoes: {
        width: 100,
        height: 45,
        margin: 5,
        padding: 10,
    },

    marginPadding: {
        margin: 5,
        padding: 10,
    },

});

const Main = () => {

    const classes = useStyles();

    const [controleTela, setControleTela] = useState('Main');

    const isLoading = () => {
        setControleTela('Loading')
    }
    const mostrarLista = () => {
        setControleTela('MotrarLista')
    }
    const resetarTela = () => {
        setControleTela('Main')
    }

    const alternarTeste = () => {
        if (controleTela === 'Main') {
            isLoading()
        } else {
            resetarTela()
        }
    }

    const [modalState, openModal] = useState(false);

    const handleModal = () => {
        openModal(!modalState);
    }

    return (
        <>
            <Box className={
                'Main' === controleTela ? classes.telaPrincipalBusca : classes.telaPrincipalLista}>
                <Typography className={
                    'Main' === controleTela ? classes.buscaProcesso : classes.buscaProcessoNoColor}
                    variant={'Main' === controleTela ? "h1" : "body1"}>
                    Busca de Processos
                    </Typography>
                <TextFieldGenerator
                    className={classes.campoDeBusca}
                    id="pesquisa"
                    label=""
                    placeholder="Pesquise uma informação do Processo"
                    multiline={false}
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={alternarTeste}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    component={Card}
                />
                {'Main' === controleTela ?
                    <Typography
                        className={classes.marginPadding}
                    >Voce pode criar um novo processo
                    <Button onClick={handleModal} >clicando aqui.</Button>
                    </Typography> :
                    <Button variant="contained"
                        className={classes.padraoBotoes}
                        disableElevation
                        onClick={handleModal}>Novo</Button>}
                <Modal
                    open={modalState}
                    onClose={handleModal}
                    aria-labelledby="Modal para Novos Processos"
                    aria-describedby="Modal feito para criar novos processos"
                >
                    <Box id="modalCard"
                        marginTop="50px"
                        margin="auto"
                        minWidth={740}
                        height="fit-content"
                        width="fit-content"
                    >
                        <ProcessManager
                            closeButton={handleModal}
                            acao={"Criar Novo Processo"} />
                    </Box>
                </Modal>
            </Box>
            <Box>
                {controleTela === 'Loading' &&
                    <CircularProgress className={classes.telaPrincipalBusca} />}
                {controleTela === 'MotrarLista' &&
                    <Listagem className={classes.telaListagem} />}
            </Box>
        </>
    )
};

export default Main