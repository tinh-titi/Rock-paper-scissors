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

const ScoreWrapper = styled('div')({
display: 'flex',
justifyContent: 'space-around',
})


function App(props) {

  return (
    <div>
      <Typography align="center" variant="h3" margin='50px'>ROCK - PAPER - SCISSORS GAME</Typography>
      <MainWrapper>
        <ButtonWrapper>
          <div></div>
          <Button variant="contained" margin='12px'>Rock</Button>
          <Button variant="contained" margin='12px'>Paper</Button>
          <Button variant="contained" margin='12px'>Scissors</Button>
        </ButtonWrapper>
        <div>
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
        </div>
        <Typography variant="h3">VS</Typography>
        <div>
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
        </div>
      </MainWrapper>
      <ScoreWrapper>
      <Typography variant="h4">SCORE</Typography>
      <Box
        sx={{
          width: 200,
          height: 100,
          backgroundColor: '#74b9ff',
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
          backgroundColor: '#74b9ff',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      </ScoreWrapper>

    </div>
  )
}

export default App;