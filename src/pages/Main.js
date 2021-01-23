
import { makeStyles, Modal, Box, Card, InputAdornment, Typography, Button, IconButton, CircularProgress } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useState } from 'react';
import ProcessManager from '../components/ProcessManager.js';
import TextFieldGenerator from '../components/TextFieldGenerator.js'

const useStyles = makeStyles({

});

const Main = () => {

    const classes = useStyles();

    const [controleTela, setControleTela] = useState('Main');

    const isLoading = () => {
        setControleTela('Loading')
    }
    // const mostrarLista = () => {
    //     setControleTela('MotrarLista')
    // }
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
            <Box display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                position="absolute"
                top='0'
                right='0'
                bottom='0'
                left='0'
                margin="auto"
                minWidth={500}>
                {'Main' === controleTela && <Typography variant="h1">Busca de Processos</Typography>}
                <Box width={500}>
                    {'Main' !== controleTela && <Typography variant="body1">Busca de Processos</Typography>}
                    <TextFieldGenerator
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
                    {'Main' !== controleTela && 
                    <Button variant="contained"
                            disableElevation 
                            onClick={handleModal}>Novo</Button>}
                </Box>
                {'Main' === controleTela && <Typography>Voce pode criar um novo processo <Button onClick={handleModal} >clicando aqui.</Button></Typography>}
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
                {controleTela === 'Loading' && <CircularProgress />}
            </Box>
        </>
    )
};

export default Main