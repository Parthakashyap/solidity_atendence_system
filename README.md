# Attendance Verification System

## Vision

The Attendance Verification System is designed to create a decentralized and transparent platform for verifying and rewarding student attendance using blockchain technology. By leveraging smart contracts, this system ensures that attendance records are immutable and tamper-proof, while students are rewarded with tokens for each attendance they mark. This encourages consistent attendance and provides a verifiable record of participation.

## Demos

![image](https://github.com/user-attachments/assets/cf0e5cd6-1816-4b09-9b17-a3bd2b08898c)

![image](https://github.com/user-attachments/assets/587492c0-bcd5-4404-85be-88096f6031df)



## Flowchart

```plaintext
+-------------------------------------------+
|                                           |
|            Instructor (Contract Deployer) |
|                                           |
+--------------------------+----------------+
                           |
                           v
           +---------------------------------+
           |                                 |
           |     Deploy Attendance Contract  |
           |                                 |
           +---------------------------------+
                           |
                           v
+--------------------------+----------------+
|                                           |
|  Students                                  |
|                                           |
+--------------------------+----------------+
                           |
                           v
           +---------------------------------+
           |                                 |
           |    Instructor Marks Attendance  |
           |       for a Student             |
           |                                 |
           +---------------------------------+
                           |
                           v
+--------------------------+----------------+
|                                           |
|   Tokens are Rewarded to the Student      |
|                                           |
+--------------------------+----------------+
                           |
                           v
           +---------------------------------+
           |                                 |
           |   Student Checks Token Balance  |
           |                                 |
           +---------------------------------+
```

## Contract Address

The smart contract is deployed on the Ethereum test network at the following address:

`0x77776AEfB72ac5A3edCbbf6Ce50b7120B7f0203D`

Please replace this placeholder with the actual contract address once deployed.

## Features

- **Instructor-Only Access:** Only the instructor (contract deployer) can mark attendance and reward tokens.
- **Token Rewards:** Students are rewarded with 1 token for each attendance marked by the instructor.
- **Transparency:** Attendance records and token balances are stored on the blockchain, ensuring transparency and immutability.
- **Public Token Balance Check:** Students can check their token balance anytime using the `getTokenBalance` function.

## Future Scope

- **Multiple Instructors:** Extend the contract to allow multiple instructors with different permissions to mark attendance.
- **Token Economy:** Implement a system where students can redeem tokens for rewards or privileges within the institution.
- **Automated Attendance:** Integrate with IoT devices or mobile apps to automatically mark attendance.
- **Off-Chain Data Storage:** Incorporate IPFS or similar technologies to store additional off-chain data linked to attendance records.
- **Student Enrollment:** Implement a mechanism for student registration and enrollment in the contract.

## Contact Information

For any inquiries, issues, or contributions, please contact:

**Partha Pratim Kashyap**  
Email: parthakashyal@gmail.com  
LinkedIn: [Partha Pratim Kashyap](https://www.linkedin.com/in/partha-pratim-kashyap)  


---

**Note:** This project is currently in its initial stage and is intended for educational purposes. Further enhancements and deployments are planned as part of the project's future roadmap.
