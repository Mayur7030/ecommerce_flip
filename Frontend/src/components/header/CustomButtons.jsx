import React, { useContext, useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../context/DataProvider.jsx";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;
const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  broder-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px
`;

function CustomButtons() {
  const [open, setOpen] = useState(false);
  const { account, toggleAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} toggleAccount={toggleAccount}></Profile>
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3}}>More</Typography>
      <Container>
        <ShoppingCartIcon></ShoppingCartIcon>
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen}>
        hello
      </LoginDialog>
    </Wrapper>
  );
}

export default CustomButtons;
