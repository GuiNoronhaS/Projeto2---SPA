import { Box, Button, Card, Grid } from "@material-ui/core";
import TextFieldGenerator from "./TextFieldGenerator";

function CardMaker(props) {
    return (
        <Card
            id={props.id}
            raised='true'
        >
            <Box width='40%'>
                <TextFieldGenerator
                    id="assunto"
                    label="Assunto"
                    placeholder="Digite o Assunto"
                    multiline="false"
                    rows="1"
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
                            multiline="false"
                            rows="1"
                            variant="standard"
                            margin="none"
                            InputProps={{}}
                            component={Card}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button>
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
                    multiline="true"
                    rows="5"
                    variant="standard"
                    margin="none"
                    InputProps={{}}
                    component={Card}
                />
            </Box>
        </Card>
    );
};

export default CardMaker