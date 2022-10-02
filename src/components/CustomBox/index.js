
import { Box, styled } from "@mui/material";

export const CustomBox = styled(Box)(({theme}) => ({
    width: 300,
    height: 300,
    background: theme.palette.boxColor,
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
}))


export const ScoreBox = styled(Box)(({theme}) => ({
    width: 200,
    height: 100,
    margin: '30px',
    background: theme.palette.boxColor,
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
    fontSize: '100px',
    fontWeight: 'bold',
    textAlign: 'center'
}))

