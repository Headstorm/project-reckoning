import React, { useState, useEffect } from 'react';
import { Button, withStyles, LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { getCheckInCounts } from '../apiCalls';

const SignInButton = withStyles(() => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#D96239',
    marginBottom: '2rem',
  },
}))(Button);

const WorkRemoteButton = withStyles(() => ({
  root: {
    color: '#D96239',
  },
}))(Button);

const BaseContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 2rem 2rem 1rem 2rem;
  flex: 1 0;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Immune = styled.div`
  background-color: #50c02e;

  h2 {
    margin-left: 1rem;
  }
`;

const Fine = styled.div`
  background-color: #e1e1e1;
  margin: 1rem 0rem;

  h2 {
    margin-left: 1rem;
  }
`;

const CheckIn = (props) => {
  const nextPath = (path) => {
    props.history.push(path);
  };

  // eslint-disable-next-line no-unused-vars
  const [immuneCount, setImmuneCount] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [fineCount, setFineCount] = useState(0);
  const totalOccupancy = 25;
  const percentOccupation = ((immuneCount + fineCount) / totalOccupancy) * 100;

  useEffect(() => {
    getCheckInCounts()
      .then((res) => res.json())
      .then((response) => {
        setImmuneCount(response.positiveCount);
        setFineCount(response.negativeCount);
      })
      .catch((error) => console.log(error));
  });

  return (
    <BaseContainer>
        <Immune>
          <h2>{immuneCount} Immune to COVID</h2>
        </Immune>
        <Fine>
          <h2>{fineCount} Feeling Fine</h2>
        </Fine>
        <LinearProgress variant="determinate" value={percentOccupation} />
        {percentOccupation}% Occupied
        <SignInButton
          size="large"
          variant="contained"
          onClick={() => nextPath('/covid-check')}
        >
          Sign In
        </SignInButton>
        <WorkRemoteButton onClick={() => nextPath('/good-day')}>
          I'm going to work remote
        </WorkRemoteButton>
    </BaseContainer>
  );
};

export default withRouter(CheckIn);
