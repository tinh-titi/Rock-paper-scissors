import { Box, styled } from "@mui/material";

export const CustomBox = styled(Box)({
    width: 300,
    height: 300,
    backgroundColor: '#48dbfb',
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    }
})


export const ScoreBox = styled(Box)({
    width: 200,
    height: 100,
    margin: '30px',
    backgroundColor: '#74b9ff',
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
})

