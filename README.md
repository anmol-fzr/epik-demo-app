# AI Product Advisor – React Native Assignment

## 📌 Overview
This project is a small prototype of an **AI-powered product advisor**, built as part of the Getepik.in assignment.  
The goal was to move beyond keyword search and allow users to describe their needs in **plain English**, with an AI model recommending the best products from a predefined catalog.

The system consists of:
- **Frontend (Expo + React Native)** → User interface for input and displaying recommendations.
- **Backend (Hono)** → API server that handles product catalog lookup, prompt construction, and communication with a generative AI model.

---

## 🚀 Running the Project

> ⚠️ Note:
> Before running the app, make sure to edit the .env file in /apps/native with the correct backend server URL 
> API Key is already in the .env file in /apps/server

There are **two ways** to start the application:  

### 1️⃣ Preferred: Turbo (single command)
```bash
bun install

turbo dev
```

### Manual: Run in separate terminals

```cd apps/server
bun install
bun run dev
```

```cd apps/native
npm install
npx expo start
```

---

## 🏗️ Architecture

[React Native App] --(query)--> [Hono Backend] --(prompt)--> [LLM API] \n
^                                                                   | \n
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

## 🧑‍💻 Tech Stack

- **Frontend**: React Native (Expo), TypeScript, Zustand  
- **Backend**: Hono.js, Bun, TypeScript  
- **AI**: Generative model API (Gemini)  
- **Tools**: Turborepo

---

## 🚀 Running the Project

### 1. Backend (Hono)
```bash
cd backend
bun install
bun run dev
```
---

## 📂 File Structure

├── ai_conversation_log.md
├── apps
│   ├── native
│   │   ├── api
│   │   │   └── index.ts
│   │   ├── app
│   │   │   ├── _layout.tsx
│   │   │   └── (tabs)
│   │   │       ├── index.tsx
│   │   │       ├── _layout.tsx
│   │   │       └── products.tsx
│   │   ├── app.json
│   │   ├── assets
│   │   │   ├── adaptive-icon.png
│   │   │   ├── favicon.png
│   │   │   ├── icon.png
│   │   │   └── splash.png
│   │   ├── babel.config.js
│   │   ├── cesconfig.jsonc
│   │   ├── components
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── index.ts
│   │   │   ├── nativewindui
│   │   │   │   ├── ActivityIndicator.tsx
│   │   │   │   ├── ProgressIndicator.tsx
│   │   │   │   └── Text.tsx
│   │   │   ├── product
│   │   │   │   ├── index.ts
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductList.tsx
│   │   │   │   └── ProductLoading.tsx
│   │   │   └── ui
│   │   │       ├── button.tsx
│   │   │       ├── index.ts
│   │   │       ├── input.tsx
│   │   │       └── text.tsx
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── expo-env.d.ts
│   │   ├── global.css
│   │   ├── hooks
│   │   │   ├── index.ts
│   │   │   ├── useLoading.ts
│   │   │   ├── useQuery.ts
│   │   │   └── useTimedCycle.ts
│   │   ├── lib
│   │   │   ├── cn.ts
│   │   │   ├── useColorScheme.tsx
│   │   │   ├── useHeaderSearchBar.tsx
│   │   │   └── utils.ts
│   │   ├── metro.config.js
│   │   ├── nativewind-env.d.ts
│   │   ├── package.json
│   │   ├── pnpm-lock.yaml
│   │   ├── prettier.config.js
│   │   ├── store
│   │   │   ├── index.ts
│   │   │   └── store.ts
│   │   ├── tailwind.config.js
│   │   ├── theme
│   │   │   ├── colors.ts
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   └── server
│       ├── package.json
│       ├── src
│       │   ├── config
│       │   │   └── index.ts
│       │   ├── db
│       │   │   └── index.ts
│       │   ├── index.ts
│       │   └── utils
│       │       └── const.ts
│       └── tsconfig.json
├── bts.jsonc
├── bunfig.toml
├── bun.lock
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── turbo.json
└── usage.webm

20 directories, 66 files

---

## 🔑 Key Design Decisions

1. **Separation of Concerns**  
- Backend handles catalog + AI calls.  
- Frontend focuses only on UI/UX.

2. **Prompt Engineering**  
- Backend forces AI to return structured JSON:
    ```txt
    You are the best AI product recommender.
    Given a user’s request and an array of products, analyze the requirements and recommend the 2–4 most relevant products.
    Always justify your choices briefly and ensure recommendations are accurate, helpful, and user-focused.

    You can't ask any questions back, and you must return 2 products atleast.
    Available Products are ${PRODUCT_CATALOG}

    User Prompt: ${q}

    You must return the response in a JSON Object like this
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

## 🧑‍💻 Tech Stack

- **Frontend**: React Native (Expo), TypeScript, Zustand  
- **Backend**: Hono.js, Node.js, TypeScript  
- **AI**: Generative model API (Gemini/OpenAI)  
- **Tools**: Git, GitHub, Snack (for demo)

---
