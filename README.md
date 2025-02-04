# Spendyze Project

## Overview

This project consists of two main components:

- **Frontend**: A React application built with Vite, providing an interactive UI for managing transactions, generating reports, and AI-based consultation. It leverages modern libraries such as Material-UI, React Router, and integrates a custom AI chat module.
  
- **Backend**: A C application that serves as a lightweight RESTful API using SQLite3 for data storage. It handles user authentication, transaction insertion, and retrieval of transaction data, compiling all data into JSON responses for the frontend.

## Frontend

- **Technology Stack**: 
  - React with Vite for fast development and Hot Module Replacement.
  - MUI (Material-UI) for UI components.
  - ESLint configured for code quality.

- **Key Features**:
  - Login and account creation.
  - Transaction management including adding transactions.
  - Displaying transaction history and monthly reports.
  - AI Consultation via integration with a Gemini API for economic insights.
   
- **Commands**:
  - **Development**: `npm run dev`
  - **Build**: `npm run build`
  - **Preview**: `npm run preview`

## Backend

- **Technology Stack**:
  - Written in C and compiled using gcc.
  - SQLite3 for storing user and transaction data.

- **Key Features**:
  - User authentication and account creation.
  - Transaction insertion and retrieval using simplistic JSON responses.
  - Provides two endpoints for transaction data:
    - Raw transaction list.
    - Chart.js bar configuration for monthly summaries.

- **Commands**:
  - **Build**: `gcc -o server main.c home.c login.c transactions.c -lsqlite3`
  - **Run**: `./server`

> **Note:** If you encounter any issues when compiling the backend, don't worry — you can use our precompiled server file by running `./server`.

## Integration

- The frontend communicates with the backend via HTTP requests, with CORS headers properly configured on the backend.
- Session management is handled via browser storage for authentication, while the backend uses a simple global user ID to maintain session state.
- Both components are modular, facilitating future enhancements and improvements.

## Notes

- Ensure that the necessary dependencies are installed in the frontend (npm) and that SQLite3 is available for the backend compilation.
- The project is structured to promote clarity and maintainability across both the client and server sides.

Use Spendyze to spend Efficient ✨.