import React, { useState } from "react";
import ConnectWallet from '../subComponents/ConnectWallet'
import styled from 'styled-components';
import AddCustomToken from "../subComponents/AddCustomToken";

const ConnectionDetails = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

`;

const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
  color: #FF5722;
  font-size: 28px;
`;

const ConnectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 88%;
  /* max-width: 58rem; */
  font-size: 20px;
`;

const DashBoard = ({ network, userInfoDetails, etherObjDetails }) => {
  const [userInfo, setUserInfo] = useState({});
  const [etherObj, setEtherObj] = useState({});

  const userInfoValue = (userData) => {
    setUserInfo(userData);
    userInfoDetails(userData);
  };
  const etherObjValue = (etherData) => {
    setEtherObj(etherData);
    etherObjDetails(etherData)
    console.log("Dash_Board etherObj", etherObj);
  }

  return (
    <>
      <ConnectionDetails>
        <Title>✅ CONNECT YOUR METAMASK</Title>
        <ConnectButton>
          <ConnectWallet network={network} userInfoValue={userInfoValue} etherObjValue={etherObjValue} />
        </ConnectButton>
        <Details>
          <span>WalletAddress :</span>
          {userInfo.account}
        </Details>
        <Details>
          <span>ChainId :</span>
          {userInfo.connectionid}
        </Details>
        <Details>
          <span>Balance :</span>
          {userInfo.balance}
        </Details>
      </ConnectionDetails>

      <AddCustomToken userInfo={userInfo} etherObj={etherObj}/>
    </>
  )
}

export default DashBoard