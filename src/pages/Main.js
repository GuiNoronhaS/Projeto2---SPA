
import {
    makeStyles, Modal, Box, Card, InputAdornment,
    Typography, Button, IconButton, CircularProgress,
    TextField,
} from '@material-ui/core';
import { Search, } from '@material-ui/icons';
import { useState } from 'react';
import ProcessManager from '../components/ProcessManager.js';
import ShowProcess from '../components/ShowProcess.js'
import Listagem from '../components/Listagem.js'
import control from '../service/RequestControler.js'

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

    BoxTelaListagem: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
    },
    BoxSelecionado: {
        display: "flex",
        width: "100%",
        height: "fit-content",
    },
    BoxLista: {
        display: "flex",
        alignItems: "baseline",
    },
    listagemStyle: {
        margin: 5,
        padding: 10,
        width: "100%",
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
        minWidth: "70vw",
    },

    padraoBotoes: {
        width: 100,
        height: 45,
        margin: 5,
        padding: 10,
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
    },

    marginPadding: {
        margin: 5,
        padding: 10,
        overflow: "hidden",
    },
    startMargingPadding: {
        textAlign: "start",
        margin: 5,
        padding: 10,
        overflow: "hidden",
    },
    endMarginPadding: {
        textAlign: "end",
        margin: 5,
        padding: 10,
        overflow: "hidden",
    },
    textField48:{
        width:"48%"
    },
    textField95:{
        width:"95%"
    },
    textField100:{
        width:"100%"
    },
    typographyOverflow: {
        whiteSpace: "nowrap", 
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    modalCard: {
        marginTop: "50px",
        margin: "auto",
        minWidth: "70vw",
        height: "fit-content",
        width: "fit-content",
    }

});

const Main = () => {

    const classes = useStyles();

    const [controleTela, setControleTela] = useState('Main');
    const [processSelected, setProcessSelected] = useState(false);
    const [processo, setProcesso] = useState({})
    const [buscar, setBuscar] = useState('')
    const [lista, setLista] = useState([])
    const [modalState, openModal] = useState(false);
    const [acao, setAcao] = useState('');

    const isLoading = () => {
        setControleTela('Loading')
    }
    const mostrarLista = () => {
        setControleTela('MotrarLista')
    }
    const resetarTela = () => {
        setControleTela('Main')
        resetaSelecionado()
        setLista([])
        setBuscar('')
        openModal(false)
    }

    const resetaSelecionado = () => {
        setProcessSelected(false)
        setProcesso({})
    }

    const buscarPorAssunto = async () => {
        isLoading()
        resetaSelecionado()
        if (buscar === '') {
            resetarTela();
        } else {
            const resposta = await control.buscarAssunto(buscar);
            if (resposta.length > 0) {
                setLista(resposta);
                mostrarLista();
            } else {
                resetarTela();
            }

        }
    }

    const deleteProcess = async (id) => {
        console.log(id)
        const resposta = await control.deletarProcesso(id)
        console.log(resposta)
        resetarTela()
    }
    const editarProcess = () => {
        setAcao("Editar esse Processo");
        handleModal()

    }
    const novoProcess = () => {
        setAcao("Criar Novo Processo");
        handleModal()
    }
    const handleSalvar = async (objeto) => {
        if (acao === "Editar esse Processo") {
            console.log("Não existe URL para editar!!!")
        } else {
            const resposta = await control.inserirProcesso(objeto)
            console.log(resposta)
        }
        resetarTela()
    }

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
                <TextField
                    className={classes.campoDeBusca}
                    id="pesquisa"
                    label=""
                    placeholder="Pesquise uma informação do Processo"
                    multiline={false}
                    variant="outlined"
                    margin="dense"
                    onChange={{}}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={buscarPorAssunto}>
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
                    <Button color="primary" onClick={novoProcess} >clicando aqui.</Button>
                    </Typography> :
                    <Button variant="contained"
                        className={classes.padraoBotoes}
                        disableElevation
                        onClick={novoProcess}>Novo</Button>}
            </Box>
            <Box className={classes.BoxLista}>
                {controleTela === 'Loading' &&
                    <CircularProgress className={classes.telaPrincipalBusca} />}
                <Box className={classes.BoxTelaListagem}>
                    {controleTela === 'MotrarLista' &&
                        <Listagem
                            lista={lista}
                            setProcessSelected={setProcessSelected}
                            setProcesso={setProcesso}
                            processSelected={processSelected}
                            typographyOverflow={classes.typographyOverflow}
                            listagemStyle={classes.listagemStyle}
                            startMarginPadding={classes.startMarginPadding}
                            marginPadding={classes.marginPadding}
                        />}
                </Box>
                {
                    controleTela === 'MotrarLista' && processSelected &&
                    <Box className={classes.BoxSelecionado}>
                        <ShowProcess
                            closeButton={resetaSelecionado}
                            className={classes.Selecionado}
                            processo={processo}
                            deleteProcess={deleteProcess}
                            editarProcess={editarProcess}
                            listagemStyle={classes.listagemStyle}
                            marginPadding={classes.marginPadding}
                            startMarginPadding={classes.startMarginPadding}
                            endMarginPadding={classes.endMarginPadding}
                            padraoBotoes={classes.padraoBotoes} />
                    </Box>
                }
            </Box>
            <Modal
                open={modalState}
                onClose={handleModal}
                aria-labelledby="Modal para Novos Processos"
                aria-describedby="Modal feito para criar novos processos"
            >
                <Box className={classes.modalCard}
                >
                    <ProcessManager
                        closeButton={handleModal}
                        processo={processo}
                        handleSalvar={handleSalvar}
                        acao={acao}
                        textField48={classes.textField48}
                        textField95={classes.textField95}
                        textField100={classes.textField100}
                        listagemStyle={classes.listagemStyle}
                        marginPadding={classes.marginPadding}
                        startMarginPadding={classes.startMarginPadding}
                        endMarginPadding={classes.endMarginPadding}
                        padraoBotoes={classes.padraoBotoes}
                    />
                </Box>
            </Modal>
        </>
    )
};

export default Main