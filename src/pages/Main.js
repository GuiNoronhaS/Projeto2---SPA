
import { Modal, Box, Card, InputAdornment, Typography, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useState } from 'react';
import CardMaker from '../components/CardMaker.js';
import TextFieldGenerator from '../components/TextFieldGenerator.js'

const Main = () => {

    const [modalState, openModal] = useState(false);

    const handleModal = () => {
        openModal(!modalState);
    }

    return (
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
            <Typography>Busca de Processos</Typography>
            <Box width={500}>
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
                                <Search />
                            </InputAdornment>
                        )
                    }}
                    component={Card}
                />
            </Box>
            <Typography>Voce pode criar um novo processo <Button onClick={handleModal} >clicando aqui.</Button></Typography>
            <Modal
                open={modalState}
                onClose={handleModal}
                aria-labelledby="Modal para Novos Processos"
                aria-describedby="Modal feito para criar novos processos"
            >
                <Box id="modalCard">
                    <CardMaker 
                    closeButton={handleModal}/>
                </Box>
            </Modal>
        </Box>
    )
};

export default Main