import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

interface AlertDialogProps {
    openDialog: boolean;
    leftButtonText: string;
    rightButtonText: string;
    leftButtonValue: string | boolean | number;
    rightButtonValue: string | boolean | number;
    titleText: string;
    contentText: string;
    clickHandler: (value: string | boolean | number) => void;
};

const AlertDialog = (props: AlertDialogProps) => {
    const { openDialog, leftButtonText, rightButtonText, leftButtonValue, rightButtonValue, titleText, contentText, clickHandler } = props;

    const handleClick = (buttonClicked: string) => {
        if (buttonClicked === 'left') clickHandler(leftButtonValue);
        else if (buttonClicked === 'right') clickHandler(rightButtonValue);
    };

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={() => handleClick('')}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{titleText}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {contentText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClick('left')} color="primary">
                        {leftButtonText}
                    </Button>
                    <Button onClick={() => handleClick('right')} color="primary">
                        {rightButtonText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;