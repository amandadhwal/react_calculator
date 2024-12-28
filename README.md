**Overview**

This project is a simple calculator application built using React and Vite. It allows users to perform basic arithmetic operations by interacting with a user-friendly interface.

**Features**

Dynamic Input and Display: Users can input numbers and operations through buttons, and results are displayed dynamically.

Clear Functionality: Reset the input display with the "C" button.

Evaluate Expressions: Calculate the result of the entered expression using the "=" button.

**Folder Structure**

./src
├── App.jsx                  # Main application component
├── App.module.css          # Styling for the App component
├── assets/                 # Static assets (e.g., logos)
│   ├── react.svg
│   └── vite.svg
├── component/
│   ├── Display_container.jsx # Component for displaying calculator input and results
│   ├── Button_container.jsx  # Component for rendering calculator buttons
└── main.jsx                # Entry point of the application

****Components**

App

The main application component handles the state of the calculator (calval) and contains the logic for handling button clicks.

Display_container

Responsible for displaying the current value of the calculator input or result.

Button_container

Renders buttons for the calculator and passes button click events back to the parent component.

**Setup and Installation**

Prerequisites

Node.js (version 14 or higher)

npm or yarn package manager

**Dependencies**
React

Vite
