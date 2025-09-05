# AI Product Advisor – React Native Assignment

[Video Here](https://raw.githubusercontent.com/anmol-fzr/epik-demo-app/refs/heads/main/usage.webm)

## 📌 Overview
This project is a small prototype of an **AI-powered product advisor**, built as part of the Getepik.in assignment.  
The goal was to move beyond keyword search and allow users to describe their needs in **plain English**, with an AI model recommending the best products from a predefined catalog.

The system consists of:
- **Frontend (Expo + React Native)** → User interface for input and displaying recommendations.
- **Backend (Hono)** → API server that handles product catalog lookup, prompt construction, and communication with a generative AI model.

---

# Prerequisites

To run the setup commands and use this project effectively, you'll need the following software installed on your system:

* **Git:** A version control system used for managing code. Download it from https://git-scm.com/
* **Node.js and npm (Node Package Manager):** Node.js is a JavaScript runtime environment, and npm is its package manager. Download Node.js (which includes npm) from https://nodejs.org/
* **cURL** command line tool and library for transferring data with URLs from https://curl.se/

**Additional Notes:**

* You'll be using a POSIX-compliant shell environment, which is commonly found on Linux and macOS systems.

# Setup Instructions

> [!NOTE]
> use a POSIX-compliant shell environment.

## 🚀 Running the Project

> ⚠️ Note:
> Before running the app, make sure to edit the .env file in /apps/native with the correct backend server URL. \
> API Key is already in the .env file in /apps/server

There are **two ways** to start the application:  

### 1️⃣ Preferred Bash Script (single command)
```bash
curl https://raw.githubusercontent.com/anmol-fzr/epik-demo-app/refs/heads/main/setup.sh | sh
```

### Manual: Run in separate terminals

```cd apps/server
bun install
bun run dev
```

```cd apps/native
npm install
npm run android
```

---

## 🏗️ Architecture

[React Native App] --(query)--> [Hono Backend] --(prompt)--> [LLM API] <br>
^                                                                   | <br>
|----------------------(recommendations JSON)<----------------------|

- **Frontend**:  
  - Collects the user’s natural language query.  
  - Sends query to backend via `POST /recommend`.  
  - Displays AI recommendations (name + reasoning) in a clean UI.

- **Backend**:  
  - Hosts the **PRODUCT_CATALOG** (static array of objects).  
  - Accepts user queries, constructs an AI prompt, and calls the LLM (Google Gemini).  
  - Returns structured JSON with recommended products + reasons.


---

## 🔑 Key Design Decisions

1. **Separation of Concerns**  
   - Backend handles catalog + AI calls.  
   - Frontend focuses only on UI/UX.

2. **Prompt Engineering**  
   - Backend forces AI to return structured JSON:
     ```txt
     You are an AI product advisor.
     Recommend products only from this catalog:
     ${PRODUCT_CATALOG}

     User query: "I need a lightweight laptop for travel"
     Return JSON:
     {
        product_names: ["product_1_name", "product_2_name", ...],
        reason: "The Reason why you recommended these products"
     }
     ```
   - Ensures predictable parsing on the frontend.

3. **Minimal but Polished UX**  
   - Simple **two-screen flow**: Input → Results.  
   - Product cards with **name + explanation**.  
   - Loading and error states for clarity.

4. **State Management**  
   - Used **Zustand (lightweight)** for managing recommendations.  
   - Keeps UI state predictable without heavy boilerplate.

---

## 🧑‍💻 Tech h Stack

- **Frontend**: React Native (Expo), TypeScript, Zustand  
- **Backend**: Hono.js, Bun, TypeScript  
- **AI**: Generative model API (Gemini)  
- **Tools**: Turborepo

---
