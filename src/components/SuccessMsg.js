import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from "@material-ui/core";


function SuccessMsg(props) {
    return (
        <Dialog
            open={props.open}

            aria-labelledby="tituloDoAlerta"
            aria-describedby="descricaoDoAlerta"

            disableBackdropClick
        >
        <DialogTitle variant="h2" id="tituloDoAlerta"> Sua Requisição foi um Sucesso </DialogTitle>
        <DialogContent>
          <DialogContentText variant="body1" id="descricaoDoAlerta">
                A requisição de {props.requisicao} foi um sucesso!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} autoFocus>
                Close
          </Button>
        </DialogActions>
      </Dialog >
    );
};

export default SuccessMsg