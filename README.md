# CPD USM Course 2026
CPD USM Course Pusat Sejahtera 2026

# 🚀 CPD Digitalization in Public Health: Workshop Notes

## 🧠 The 4P Gemini Master Prompt Template (Public Health & Code Generation)
Use this structured **4P Framework** (Persona, Prompt, Provided Context, Performance Format) as the core teaching asset for your workshop participants. It trains non-technical health staff to write prompts that produce exact Looker Studio formulas and Apps Script code without errors.

```text
================================================================================
                    THE 4P GEMINI MASTER PROMPT TEMPLATE
================================================================================

[1. PERSONA / PROFILE]
Act as an expert Public Health Data Engineer and Google Workspace Developer. 
I am a Public Health Officer at Pusat Sejahtera USM with basic data management skills.

[2. PROMPT / PRIMARY TASK]
Write a [Specify: Looker Studio Calculated Field / Google Apps Script / AppSheet Expression] 
that will [State the exact technical goal, e.g., classify patient wait times into triage priority levels].

[3. PROVIDED CONTEXT]
- Data Source: [e.g., Google Sheet named 'Outpatient_Logs']
- Field/Column Names: [e.g., 'Visit_Timestamp', 'Patient_Type', 'WaitTime_Minutes', 'Location_GPS']
- Logic / Clinical Rules:
  * [Rule 1: e.g., If WaitTime_Minutes < 15 -> 'Low Risk / Green']
  * [Rule 2: e.g., If WaitTime_Minutes between 15 and 30 -> 'Moderate / Yellow']
  * [Rule 3: e.g., If WaitTime_Minutes > 30 -> 'High Risk / Red']
- Constraints: Must handle null or missing entries gracefully without throwing errors.

[4. PERFORMANCE & PRODUCTION FORMAT]
- Output Format: Provide ONLY valid, copy-pasteable code/formula blocks.
- Documentation: Include a 2-line explanation of where to paste this inside [Looker Studio / Apps Script / AppSheet].
- Error Avoidance: Do not include markdown fluff outside the explanation.
================================================================================
```

## 🤖 Demonstrating the Gemini API & Building a Simple Public Health Chatbot
Yes, you should definitely include a 15–20 minute live demonstration or hands-on segment using the Gemini API.  

Including this creates an immediate "wow factor" because it shows participants how to move beyond static reporting (Looker Studio) into interactive AI assistance for USM health services.

### How to Structure the Gemini API Chatbot Demo (Keep it Simple & Low-Code)
Rather than spending hours setting up complex Python backend servers, leverage **Google AI Studio** or embed a lightweight **Apps Script + HTML snippet** directly into the Google Site landing page you build in Module 3.  

```text
[USM Student/Staff Query] ──> [Google Site / Web Interface] ──> [Gemini API] ──> [Pusat Sejahtera Triage / FAQ Response]
```

### The Live "Pusat Sejahtera Health & Service Assistant" Workflow
* **System Instruction Configuration:** Feed Gemini the exact Pusat Sejahtera clinic hours, available services (e.g., dental, outpatient, vaccination, mental health screening), and basic health triage protocols.
* **Interactive Live Demonstration:**
  * *Query 1 (Clinic Operations):* "What time does the dental clinic at Pusat Sejahtera open on Friday, and do I need a referral?"
  * *Query 2 (Public Health Advice):* "I have a sudden fever and joint pain after staying near the hostel block. What immediate steps should I take and which clinic counter do I report to?"
* **Participant Takeaway:** Show them how a simple API key integrated into their Google Site allows any department to deploy a 24/7 automated triage and FAQ chatbot without building custom software from scratch.  

## 🌍 Integrating IoT, AppSheet, & Automated Geolocation Workflows
Since you have strong expertise in IoT, position IoT not as complex hardware engineering, but as an **Automated Data Sensing Pipeline** that feeds directly into their operational dashboards.  

```text
┌─────────────────────────┐      ┌──────────────────────────┐      ┌──────────────────────────┐
│   IoT Sensors / Forms   │ ───> │  AppSheet / Google Sheet │ ───> │ Looker Studio Dashboard  │
│ (GPS, Temp, Air Quality)│      │  (Automation & Triggers) │      │  (Real-Time Monitoring)  │
└─────────────────────────┘      └──────────────────────────┘      └──────────────────────────┘
```

### 1. AppSheet for No-Code Field Data Collection
* **Use Case:** Campus Dengue Vector Inspection & Facility Hygiene Audits.  
* **Feature Highlights:**
  * **Automatic Geolocation:** Capture exact GPS coordinates (`ChangeLocation` / `LatLong`) when an inspector flags mosquito breeding sites on campus.  
  * **Image Upload & Conversion:** Capture field photos that automatically upload to Google Drive and convert into dynamic image previews on the Looker Studio dashboard using `IMAGE()` formulas.  

### 2. Automated Trigger Actions via Google Forms & Apps Script
* **Automated Email & Alert Triggers:**
  * When a field inspection form is submitted with a high-risk entry (e.g., positive Aedes larvae finding or severe water contamination), an Apps Script trigger (`onFormSubmit`) fires instantly:  
    1. Grabs the geolocation latitude and longitude.  
    2. Sends an automated email alert to the Pusat Sejahtera Health Officer.
    3. Updates the live Looker Studio map layer automatically.  

### 3. Real-World IoT Application Scenarios for Pusat Sejahtera USM
* **Cold-Chain Vaccine Storage Monitoring:** Automated temperature sensors (or OpenMeteo/OpenWeather API feeds) streaming ambient temperature data into Google Sheets to trigger alerts if temperatures drift outside safe ranges (2°C - 8°C).  
* **Campus Environmental Health Surveillance:** Environmental sensors pushing real-time Air Quality Index (AQI) and heat stress parameters directly into the central public health dashboard.  

## 📅 Streamlined Workshop Flow Strategy for August 8, 2026
* **Morning (Data Pipeline & Capture):** Google Forms + Apps Script Geolocation → AppSheet No-Code Mobile Capture → IoT Data Ingestion into Google Sheets.  
* **Mid-Day (Analytics & Visualization):** Looker Studio Dashboard setup using the **4P Gemini Master Prompt Template** to build formulas, filters, and image features effortlessly.  
* **Afternoon (AI Assistant & Deployment):** Gemini API Chatbot setup + embedding everything (Dashboard + Chatbot) into a Google Sites Public Health Portal.
