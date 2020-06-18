import React from "react";
import { Button, withStyles } from "@material-ui/core";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { PATHS } from '../common/constants';

const StyledButton = withStyles(() => ({
  root: {
    color: "#FFFFFF",
    backgroundColor: "#518DFD",
    width: "50%",
    margin: '1rem',
    "@media (max-width:425px)": { width: "100%" },
  },
}))(Button);

const BaseContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(3, auto);
  grid-gap: 0.625rem;
  padding: 0.625rem;
`;

const Buttons = styled.div`
  grid-row-start: 2;
  grid-column-start: 2;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width:425px) {
    width: 100%;
  }
`;

const HeaderStatement = styled.h2`
  grid-row-start: 1;
  grid-column-start: 2;
  margin-bottom: 2rem;
  text-align: center;
`;

const ReservationExpired = (props) => {
  
  const nextPath = (path) => {
    props.history.push(path);
  };

  return (
    <BaseContainer>
      <HeaderStatement>
        Your reservation is expired. 
      </HeaderStatement>
      <Buttons>
        <StyledButton
          size="large"
          variant="contained"
          startIcon={<CheckIcon/>}
          onClick={() => nextPath(PATHS.VIEW_RESERVATIONS)}
        >
          
        </StyledButton>
        <StyledButton
          size="large"
          variant="contained"
          startIcon={<ClearIcon/>}
          onClick={() => nextPath(PATHS.COVID_CHECK)}
        >
          Check In
        </StyledButton>
      </Buttons>
    </BaseContainer>
  );
};

export default withRouter(ReservationExpired);