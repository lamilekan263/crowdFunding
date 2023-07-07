import React, { useContext, useEffect, useState } from 'react';



import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components";
const Index = () => {

  const { title, getCampaigns, createCampaign, donate, getUserCampaigns, getDonations } = useContext(CrowdFundingContext);
  const [allCampaign, setAllCampaign] = useState();
  const [userCampaign, setUserCampaign] = useState();

  useEffect(() => {
    const getCampaignData = getCampaigns();
    const userCampaignData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignData;
      const userData = await userCampaignData;
      setAllCampaign(allData);
      setUserCampaign(userData);
    };
  }, []);

  const [openModel, setOpenModel] = useState(false);
  const [donateCompaign, setDonateCampaign] = useState();

  return (
    <>
      <Hero title={ title } createCampaign={ createCampaign } />

      <Card title="All Listed Camaoug"
        allCampaign={ allCampaign }
        setOpenModel={ setOpenModel }
        setDonate={setDonateCampaign}
      />

      <Card title="Your created Campaing"
        allCampaign={ userCampaign }
        setOpenModel={ setOpenModel }
        setDonate={ setDonateCampaign }
      />

      {
        openModel && (
          <PopUp
            setOpenModel={ setOpenModel }
            getDonations={getDonations}
            donate={ donateCompaign }
            donateFunction ={donate}
          />
        )
      }
    </>
  );
};

export default Index;;