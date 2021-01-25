import { ListItem, Box, Paper, Grid, Typography } from "@material-ui/core";
import PlaceholderNoImg from '../assets/img/PlaceholderNoImg.png';


function Listagem(props) {
    return (
        props.lista?.map(processo => (
            <ListItem
                key={processo.id}
                onClick={() => {
                    props.setProcessSelected(true)
                    props.setProcesso(processo)
                }}
            >
                <Box
                    component={Paper}
                    elevation={5}
                    className={props.listagemStyle}
                    display="flex"
                    flexDirection="row"
                    >
                    <Box className={props.startMarginPadding}>
                        <img src={PlaceholderNoImg} alt="Sem Imagem" />
                    </Box>
                    <Grid container spacing={10}>
                        <Grid className={props.marginPadding} item xs={props.processSelected !== true ? 2 : 3}>
                            <Typography variant="subtitle1">Número</Typography>
                            <Typography>{processo.numero}</Typography>
                        </Grid>
                        <Grid className={props.marginPadding} item xs={props.processSelected !== true ? 2 : 3}>
                            <Typography variant="subtitle1">Assunto</Typography>
                            <Typography>{processo.assunto}</Typography>
                        </Grid>
                        <Grid className={props.marginPadding} item xs={props.processSelected !== true ? 2 : 3}>
                            <Typography variant="subtitle1">Interessado</Typography>
                            <Typography>{processo.interessados[0]}</Typography>
                        </Grid>
                        {props.processSelected !== true &&
                        <Grid className={props.marginPadding} item xs={2}>
                            <Typography variant="subtitle1">Descrição</Typography>
                            <Typography>{processo.descricao}</Typography>
                        </Grid>
                        }
                    </Grid>
                </Box>
            </ListItem>
        ))
    );
};

export default Listagem
