import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const GoingHomeButton = withStyles(() => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#D96239',
  },
}))(Button);

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 0rem 2rem;
`;

const HeaderQuestion = styled.h2`
  margin-bottom: 2rem;
`;

const COVIDPositive = (props) => {
  const nextPath = (path) => {
    props.history.push(path);
  };

  return (
    <BaseContainer>
      <HeaderQuestion>
        CDC Guidelines state "Stay home until 14 days after your last exposure"
        <br />
        <br />
        Please work from home today.
      </HeaderQuestion>
      <GoingHomeButton
        size="large"
        variant="contained"
        onClick={() => nextPath('/wfh-conf')}
      >
        Going back home
      </GoingHomeButton>
    </BaseContainer>
  );
};

export default withRouter(COVIDPositive);