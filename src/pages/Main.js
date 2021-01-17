import { Box, Card, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import CardMaker from '../components/CardMaker.js';
import TextFieldGenerator from '../components/TextFieldGenerator.js'

const Main = () => {
    return (
        <>
            Titulo
            <Box width={500}>
                <TextFieldGenerator
                    id="pesquisa"
                    label=""
                    placeholder="Pesquise uma informação do Processo"
                    multiline="false"
                    rows="1"
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
            Criar Processo
            <Box width={900}>
                <CardMaker
                    id="modal">

                    </CardMaker>
            </Box>
        </>
    )
};

export default Main