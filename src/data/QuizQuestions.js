import Chooser from "../assets/Chooser";
import DropDown from "../assets/DropDown";

export const quizQuestions = [
  {
    id: "Quiz1",
    no: 1,
    question: "What is your age group?",
    answers: Chooser(["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 and above"]),
  },
  {
    id: "Quiz2",
    no: 2,
    question: "Where do you live now?",
    answers: DropDown(),
  },
  {
    id: "Quiz3",
    no: 3,
    question: "What is your employment status?",
    answers: Chooser(["Student", "Employed", "Self-employed", "Unemployed", "Retired"]),
  },
  {
    id: "Quiz4",
    no: 4,
    question: "What are your main financial goals?",
    answers: Chooser(["Saving for a specific purchase (e.g., house, car)", "Building a emergency fund", "Reducing debt", "Planning for retirement", "Investing for growth", "Managing daily expenses"]),
  },
  {
    id: "Quiz5",
    no: 5,
    question: "How often do you track your income and expenses?",
    answers: Chooser(["Daily", "Weekly", "Monthly", "Rarely", "Never"]),
  },
  {
    id: "Quiz6",
    no: 6,
    question: "What are your primary sources of income?",
    answers: Chooser(["Salary", "Business income", "Investments", "Freelance / Side gigs", "Pensions / Retirement funds", "Others"]),
  },
  {
    id: "Quiz7",
    no: 7,
    question: "Do you currently use a budget?",
    answers: Chooser(["Yes, strictly", "Yes, loosely", "No, but i want to start", "No, I dont see the need"]),
  },
  {
    id: "Quiz8",
    no: 8,
    question: "What are your biggest monthly expenses?",
    answers: Chooser(["Housing", "Utilities", "Food & Groceries", "Transportation", "Healthcare", "Entertainment", "Education"]),
  },
  {
    id: "Quiz9",
    no: 9,
    question: "What type of financial advice are you most interested in?",
    answers: Chooser(["Saving tips", "Investment advice", "Debt management", "Budgeting tips", "Retirement planning", "Tax planning"]),
  },
  {
    id: "Quiz10",
    no: 10,
    question: "How would you like to receive notifications and reminders?",
    answers: Chooser(["E-mail", "SMS", "Push notifications", "In-app notification"]),
  },
  {
    id: "Quiz11",
    no: 11,
    question: "What kind of reminders would be most useful to you?",
    answers: Chooser(["Bill payment reminders", "Saving goal reminders", "Budget review reminders", "Investment opportunities", "Financial tips and articles"]),
  },
  {
    id: "Quiz12",
    no: 12,
    question: "How often would you like to receive updates on your financial status?",
    answers: Chooser(["Daily", "Weekly", "Monthly", "As needed"]),
  },
];
