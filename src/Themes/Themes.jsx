import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1c795e',
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,

    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: 6,
                    backgroundColor: '#1c795e',
                    border: '2px solid #1c795e',
                    transition: '0.4s',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#1c795e'
                    }
                },
                containedInfo: {
                    backgroundColor: '#FFD500',
                    color: '#000000',
                    transition: '0.4s',
                    cursor: 'pointer'
                },
                outlined: {
                    borderRadius: 6,
                    border: '2px solid #1c795e',
                    transition: '0.4s',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: '#1c795e',
                        color: 'white',
                        border: '2px solid #1c795e'                   
                    }
                }
            }
        }
    }
})

export default theme;