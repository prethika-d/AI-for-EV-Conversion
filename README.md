🚗⚡ AI-Based System Conversion from Conventional Engine to Electric Vehicles
📌 Project Overview

This project aims to develop an AI-assisted system that helps users analyze conventional Internal Combustion Engine (ICE) vehicles and determine their feasibility for conversion into Electric Vehicles (EVs).

The system provides intelligent recommendations such as battery capacity, motor power, estimated driving range, conversion cost, and future EV suitability analysis.

🎯 Objective

To build a user-friendly platform that simplifies the EV conversion process by analyzing vehicle specifications and generating optimized recommendations.

🛠️ Technologies Used
Frontend
React.js
Vite
Tailwind CSS
Backend
Python
Flask
Flask-CORS
Communication
Axios
📂 Project Architecture
User
 ↓
React Frontend
 ↓
Vehicle Form
 ↓
Axios API Request
 ↓
Flask Backend
 ↓
Recommendation Engine
 ↓
JSON Response
 ↓
Recommendation Dashboard
 ↓
Graph Visualization
✅ Features Implemented (Phase 1)
Frontend
Responsive Landing Page
Navigation Bar
Hero Section
Vehicle Input Form
Recommendation Dashboard
Graph Visualization
Backend
Flask Server Setup
API Endpoint Creation
Vehicle Data Processing
Recommendation Generation
Integration
React ↔ Flask Connection
Axios API Communication
End-to-End Testing
📥 User Inputs

The user provides:

Vehicle Model
Vehicle Type
Vehicle Weight
Engine Capacity (CC)
Vehicle Age
Daily Distance Travelled
Budget
📤 Current Outputs

The system currently generates:

Battery Capacity Recommendation
Motor Power Recommendation
Estimated EV Range
Estimated Conversion Cost
Conversion Feasibility
⚙️ Current Logic

At present, the system uses a rule-based recommendation engine with engineering assumptions.

Example:

Battery Capacity = Vehicle Weight / 50

Motor Power = Engine Capacity / 25

Estimated Range = Battery × 8

Conversion Cost = Battery × 12000

Note: This is an initial prototype and will later be upgraded to a Machine Learning-based AI model.

🧪 Testing Status
Successfully Completed
✅ Frontend Development
✅ Backend Development
✅ React-Flask API Integration
✅ Recommendation Generation
✅ Graph Visualization
✅ End-to-End System Testing
🚀 Future Enhancements
EV Suitability Score
Battery Type Recommendation
Charging Time Estimation
Annual Fuel Savings
CO₂ Emission Reduction Analysis
Machine Learning Integration
Dataset-based Prediction Models
