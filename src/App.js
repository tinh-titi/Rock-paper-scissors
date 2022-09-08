import { Typography, Button, styled, } from "@mui/material";
import React, { useState } from "react";
import { CustomBox, ScoreBox } from "./components/CustomBox";
// import { RockImage, PaperImage, ScissorsImage } from "./components/Images";


const ButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '200px',
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

const CustomImg = styled('img')({
  width: '300px',
  height: '300px',
})

function App(props) {

  const [userChoice, setUserChoice] = useState()

  const [machineChoice, setMachineChoice] = useState()

  const [result, setResult] = useState()
  // You win! You lose, It's draw!

  const choices = [
    { img: '/Images/Rock.png', title: 'Rock' },
    { img: '/Images/Paper.png', title: 'Paper' },
    { img: '/Images/Scissors.png', title: 'Scissors' }
  ]

  const handleOnClick = (img) => {
    setUserChoice(img)
    const randomChoice = choices[Math.floor(Math.random() * choices.length)].img
    setMachineChoice(randomChoice)
    setResult()
    console.log(img)
  }

  return (
    <div>
      <Typography align="center" variant="h3" margin='50px'>ROCK - PAPER - SCISSORS GAME</Typography>
      <MainWrapper>
        <ButtonWrapper>
          <Button variant="contained" onClick={() => handleOnClick(choices[0].img)}>Rock</Button>
          <Button variant="contained" onClick={() => handleOnClick(choices[1].img)}>Paper</Button>
          <Button variant="contained" onClick={() => handleOnClick(choices[2].img)}>Scissors</Button>
          <Typography variant="h4">SCORE</Typography>
        </ButtonWrapper>
        <BoxPlayerWrapper>
          <Typography variant='h5'>PLAYER</Typography>
          <CustomBox>
            <CustomImg src={userChoice} />
          </CustomBox>
          <ScoreBox></ScoreBox>
        </BoxPlayerWrapper>
        <div align="center">
          <Typography variant="h3">VS</Typography>
          <Typography variant="h2">{result}</Typography>
        </div>
        <BoxMachineWrapper>
          <Typography variant='h5'>MACHINE</Typography>
          <CustomBox>
            <CustomImg src={machineChoice} />
            </CustomBox>
          <ScoreBox></ScoreBox>
        </BoxMachineWrapper>
      </MainWrapper>

    </div>
  )
}

export default App;