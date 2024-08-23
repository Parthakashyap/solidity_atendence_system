// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AttendanceVerification {

    // Instructor address (only this address can mark attendance)
    address public instructor;

    // Token balance mapping for each student
    mapping(address => uint256) public tokenBalance;

    // Event to notify that attendance has been marked
    event AttendanceMarked(address student, uint256 tokensRewarded);

    // Constructor to set the instructor
    constructor() {
        instructor = msg.sender; // The address that deploys the contract is the instructor
    }

    // Modifier to restrict access to the instructor
    modifier onlyInstructor() {
        require(msg.sender == instructor, "Only instructor can perform this action");
        _;
    }
// Array to store student addresses
address[] public students;

// Function to mark attendance and reward tokens for an array of students
function markAttendance(address[] memory studentAddresses) public onlyInstructor {
    require(studentAddresses.length > 0, "No students provided");

    for (uint i = 0; i < studentAddresses.length; i++) {
        address student = studentAddresses[i];
        require(student != address(0), "Invalid student address");

        // Reward the student with tokens (1 token per attendance)
        tokenBalance[student] += 1;

        // Emit an event that attendance has been marked
        emit AttendanceMarked(student, 1);
    }
}

    // Function to check student's token balance
    function getTokenBalance(address student) public view returns (uint256) {
        return tokenBalance[student];
    }
}