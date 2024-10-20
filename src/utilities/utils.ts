
import Snackbar from 'react-native-snackbar';

export const showErrorSnackbar = (errorMessage: string) => {
    Snackbar.show({
        text: errorMessage,
        duration: Snackbar.LENGTH_SHORT,
        action: {
            text: 'Undo',
            textColor: 'red',
        },
    });
};

export const showSuccessSnackbar = (successMessage: string) => {
    Snackbar.show({
        text: successMessage,
        duration: Snackbar.LENGTH_SHORT,
        action: {
            text: 'Undo',
            textColor: 'green',
        },
    });
};

export const showInfoSnackbar = (infoMessage: string) => {
    Snackbar.show({
        text: infoMessage,
        duration: Snackbar.LENGTH_SHORT,
        action: {
            text: 'Undo',
            textColor: 'orange',
        },
    });
};
