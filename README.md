# College Assist – AI Chatbot (React + TypeScript + OpenAI API)

College Assist is an AI-powered chatbot that helps students get quick answers to common college-related questions. It uses the OpenAI API plus some custom logic to provide helpful, conversational responses inside a clean, responsive UI.

## 🚀 Features

- Chat-style interface with message bubbles and typing indicator
- Quick actions for common student questions
- FAQ matching with fallback to AI responses
- Modular React + TypeScript codebase
- TailwindCSS styling

## 🛠 Tech Stack

- React + TypeScript (Vite)
- TailwindCSS
- OpenAI API
- Custom utilities for FAQ matching and AI response handling
## ▶️ Running the Project
npm install
npm run dev

## 📂 Folder Structure

```text
src/
  components/
    ChatBot.tsx
    MessageBubble.tsx
    QuickActions.tsx
    TypingIndicator.tsx
  data/
    faqs.ts
  services/
    aiServices.ts
  types/
    chat.ts
  utils/
    aiResponses.ts
    faqMatcher.ts
  App.tsx
  main.tsx
  index.css
  vite-env.d.ts
