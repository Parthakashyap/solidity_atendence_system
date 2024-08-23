"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import InstructorDashboard from "./components/instDashboard";
import StudentDashboard from "./components/studDashboard";
import Attendance from "./components/attendence";
import { BackgroundBoxesDemo } from "./components/ui/backgroundBoxes";

import { useWeb3ModalProvider, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { Contract, BrowserProvider } from "ethers";

const attandanceToken = '0x77776AEfB72ac5A3edCbbf6Ce50b7120B7f0203D';

const AttandanceABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "student",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensRewarded",
				"type": "uint256"
			}
		],
		"name": "AttendanceMarked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "student",
				"type": "address"
			}
		],
		"name": "markAttendance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "student",
				"type": "address"
			}
		],
		"name": "getTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "instructor",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


export default function Home() {
  const { walletProvider } = useWeb3ModalProvider();
   async function getRpcProvider () {
   
    const etherProvider = new BrowserProvider(walletProvider);
    const signer = await etherProvider.getSigner();
    const attendanceContract = new Contract(attandanceToken, AttandanceABI, signer);
    return attendanceContract
}


  async function TestFun() {
    const contract = await getRpcProvider();
    console.log(await contract.instructor());
  }

  return (
    <main className="w-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-800 via-gray-950 to-black">
        <Navbar/>
        <BackgroundBoxesDemo/>
        <button onClick={TestFun}>Test</button>
        <div className="flex flex-col-2 gap-24">
        <InstructorDashboard />
        <StudentDashboard />
        </div>
        <Attendance/>
        

    </main>
  );
}
