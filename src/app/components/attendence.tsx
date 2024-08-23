import React from "react";
import { Contract, BrowserProvider } from "ethers";
import { useWeb3ModalProvider } from "@web3modal/ethers5/react";

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

const studentAddresses: { [name: string]: string } = {
  "Alice": "0xAddress1",
  "Bob": "0xAddress2",
  "Charlie": "0xAddress3",
  "David": "0xAddress4"
};

function getAddressFromName(name: string): string {
  return studentAddresses[name] || "";
}

const Attendance: React.FC = () => {
  const students = ["Alice", "Bob", "Charlie", "David"];
  const { walletProvider } = useWeb3ModalProvider();

  async function getRpcProvider() {
    const etherProvider = new BrowserProvider(walletProvider);
    const signer = await etherProvider.getSigner();
    const attendanceContract = new Contract(attandanceToken, AttandanceABI, signer);
    return attendanceContract;
  }

  async function submitAttendance() {
    try {
      const contract = await getRpcProvider();
      const presentStudents = students.filter((_, index) =>
        (document.querySelectorAll("input[type='checkbox']")[index] as HTMLInputElement).checked
      );

      for (const student of presentStudents) {
        const studentAddress = getAddressFromName(student);
        if (studentAddress) {
          // Ensure the address is a valid Ethereum address
          if (ethers.utils.isAddress(studentAddress)) {
            await contract.markAttendance(studentAddress);
            console.log(`Attendance marked for ${student}`);
          } else {
            console.error(`Invalid address for ${student}: ${studentAddress}`);
          }
        } else {
          console.error(`Address not found for ${student}`);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center p-4 w-full -mt-[550px]">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-gray-800 text-center bg-gray-200 py-3">Attendance List</h2>
        <table className="w-full text-gray-800">
          <thead>
            <tr>
              <th className="border-b border-gray-300 py-3 text-left px-4">Student Name</th>
              <th className="border-b border-gray-300 py-3 text-center">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="border-b border-gray-300 py-2 px-4">{student}</td>
                <td className="border-b border-gray-300 py-2 text-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500 focus:ring-0 focus:outline-none"
                    aria-label={`Mark ${student} as present`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center py-4 bg-gray-200">
          <button onClick={submitAttendance} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
