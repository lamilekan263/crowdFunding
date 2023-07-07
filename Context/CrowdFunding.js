import React, { useState, useEffect } from "react";
import web3modal from 'web3modal';
import { ethers } from "ethers";

import { CrownFundingAddress, CrowdFundingAbi } from "./constants";




// ------Fetch smart contract


const fetchCOntract = (signerOrProvider) => {
    new ethers.Contract(CrownFundingAddress, CrowdFundingAbi, signerOrProvider);
};



export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
    const title = "Crownd Funding COntract";
    const [currentAccount, setCurrentAccount] = useState("");

    const createCampaign = async (campaign) => {
        const { title, description, amount, deadline } = campaign;

        const web3modal = new web3modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchCOntract(signer);

        console.log(currentAccount);

        try {
            const transaction = await contract.createCampaign(
                currentAccount,
                title,
                description,
                ethers.utils.parseUnits(amount, 18),
                new Date(deadline).getTime()
            );

            await transaction.wait();
            console.log("COntract call success", transaction);
        } catch (error) {
            console.log("contract call failure", error);
        }
    };


    const getCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchCOntract(provider);


        const campaigns = await contract.getCampaigns();


        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            pid: i
        }));

        return parsedCampaigns;
    };

    const getUserCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchCOntract(provider);


        const allCampaigns = await contract.getCampaigns();


        const accounts = await window.ethereum.request({
            method: "eth_accounts"
        });

        const currentUser = accounts[0];

        const filterCampaigns = allCampaigns.filer(campaign => campaign.owner === "");

        const userData = filterCampaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            pid: i
        }));
        return userData;
    };

    const donate = async (pId, amount) => {
        const web3modal = new web3modal();
        const connection = await web3modal.connect();
        const provider = new ethers.provider.web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchCOntract(signer);


        const campaignData = await contract.donateToCampaign(pId, {
            value: ethers.utils.parseEther(amount),
        });

        await campaignData.wait();
        location.reload();

        return campaignData;
    };

    const getDonations = async (pid) => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchCOntract(provider);


        const donations = await contract.getDonators(pid);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for (let i = 0; i < numberOfDonations; i++) {
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString())
            });
        }

        return parsedDonations;
    };


    // -----


    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) return setOpenError(true),
                setError("Install Metamask");

            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No Account FOund");
            }

        } catch (error) {
            console.log("Something wrong while connecting to wallet");
        }
    };


    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Install metamask");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log("Error while connecting to error");
        }


    };
    return (
        <CrowdFundingContext.Provider
            value={ {
                title,
                currentAccount,
                createCampaign,
                getCampaigns,
                getUserCampaigns,
                getDonations,
                donate,
                connectWallet
            } }
        >
            { children }
        </CrowdFundingContext.Provider>
    );

};

