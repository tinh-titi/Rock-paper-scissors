import { Typography, Button, styled } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";



const ButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '200px',
  // marginBlock: '30px',
})

const MainWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '30px',
})

const BoxPlayerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const BoxMachineWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

function App(props) {

const handleOnClick = (event) => {

}

  return (
    <div>
      <Typography align="center" variant="h3" margin='50px'>ROCK - PAPER - SCISSORS GAME</Typography>
      <MainWrapper>
        <ButtonWrapper>
          <Button variant="contained" onClick={handleOnClick}>Rock</Button>
          <Button variant="contained">Paper</Button>
          <Button variant="contained">Scissors</Button>
          <Typography variant="h4">SCORE</Typography>
        </ButtonWrapper>
        <BoxPlayerWrapper>
          <Typography variant='h5'>PLAYER</Typography>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: '#48dbfb',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
          <Box
            sx={{
              width: 200,
              height: 100,
              margin: '30px',
              backgroundColor: '#74b9ff',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </BoxPlayerWrapper>
        <Typography variant="h3">VS</Typography>
        <BoxMachineWrapper>
          <Typography variant='h5'>MACHINE</Typography>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: '#48dbfb',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
          <Box
            sx={{
              width: 200,
              height: 100,
              margin: '30px',
              backgroundColor: '#74b9ff',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </BoxMachineWrapper>
      </MainWrapper>

    </div>
  )
}

export default App;