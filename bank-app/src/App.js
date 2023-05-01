import { useState } from "react";
import Home from "./components/Home";
import Form from "./components/Form";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "Abdulrahman Alazaro",
      accountNumber: "114567",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Osama Alkafaween",
      accountNumber: "385317",
      accountType: "Student accounts",
    },
    {
      id: 5,
      customerName: "Fawwaz Alkarmy",
      accountNumber: "321987",
      accountType: "Savings",
    },
  ],
  numberOfAccounts: 5,
};

function App() {
  const [accounts, setAccounts] = useState(initState.accounts);
  const [numberOfAccounts, setNumberOfAccounts] = useState(
    initState.numberOfAccounts
  );

  return (
    <>
      <Home
        accounts={accounts}
        numberOfAccounts={numberOfAccounts}
        setAccounts={setAccounts}
        setNumberOfAccounts={setNumberOfAccounts}
      />
      <Form
        setAccounts={setAccounts}
        setNumberOfAccounts={setNumberOfAccounts}
      />
    </>
  );
}

export default App;
