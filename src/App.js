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

  const [userScore, setUserScore] = useState(0)

  const [machineScore, setMachineScore] = useState(0)

  const choices = [
    { img: '/Images/Rock.png', win: 2, lose: 1 },
    { img: '/Images/Paper.png', win: 0, lose: 2 },
    { img: '/Images/Scissors.png', win: 1, lose: 0 }
  ]

  const handleOnClick = (choice) => {
    setUserChoice(choice.img)
    const randomChoice = Math.floor(Math.random() * choices.length)
    setMachineChoice(choices[randomChoice].img)
    switch (randomChoice) {
      case choice.win: 
        setResult('You win!');
        setUserScore(userScore + 1)
        break;
      case choice.lose:
        setResult('You lose!');
        setMachineScore(machineScore + 1)
        break;
      default: setResult("It's draw!")
        break;
    }
  }


  return (
    <div>
      <Typography align="center" variant="h3" margin='50px'>ROCK - PAPER - SCISSORS GAME</Typography>
      <MainWrapper>
        <ButtonWrapper>
          <Button variant="contained" onClick={() => handleOnClick(choices[0])}>Rock</Button>
          <Button variant="contained" onClick={() => handleOnClick(choices[1])}>Paper</Button>
          <Button variant="contained" onClick={() => handleOnClick(choices[2])}>Scissors</Button>
          <Typography variant="h4">SCORE</Typography>
        </ButtonWrapper>
        <BoxPlayerWrapper>
          <Typography variant='h5'>PLAYER</Typography>
          <CustomBox>
            <CustomImg src={userChoice} />
          </CustomBox>
          <ScoreBox>{userScore}</ScoreBox>
        </BoxPlayerWrapper>
        <div align='center'>
          <Typography variant="h3">VS</Typography>
          <Typography variant="h2">{result}</Typography>
        </div>
        <BoxMachineWrapper>
          <Typography variant='h5'>MACHINE</Typography>
          <CustomBox>
            <CustomImg src={machineChoice} />
          </CustomBox>
          <ScoreBox>{machineScore}</ScoreBox>
        </BoxMachineWrapper>
      </MainWrapper>

    </div>
  )
}

export default App;