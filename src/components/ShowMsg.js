import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from "@material-ui/core";


function ShowMsg(props) {
    return (
        <Dialog
            open={props.open}

            aria-labelledby="tituloDoAlerta"
            aria-describedby="descricaoDoAlerta"

            disableBackdropClick
        >
        <DialogTitle variant="h2" id="tituloDoAlerta"> Confirme a Ação </DialogTitle>
        <DialogContent>
          <DialogContentText variant="body1" id="descricaoDoAlerta">
                Voce tem certeza que deseja realizar a ação de {props.acao}, confirme abaixo:
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.reject}>
                Rejeitar
          </Button>
          <Button onClick={props.confirm} autoFocus>
                Confirmar
          </Button>
        </DialogActions>
      </Dialog >
    );
};

export default ShowMsg