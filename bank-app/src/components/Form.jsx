import { useState } from "react";

const Form = ({ setAccounts, setNumberOfAccounts }) => {
  const [customerName, setCustomerName] = useState("");
  const [accountNumber, SetAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      id: Math.random(),
      customerName,
      accountNumber,
      accountType,
    };
    setAccounts((prev) => [...prev, newAccount]);
    setNumberOfAccounts((prev) => prev + 1);
    setCustomerName("");
    SetAccountNumber("");
    setAccountType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={accountNumber}
        onChange={(e) => SetAccountNumber(e.target.value)}
        placeholder="Account Number"
      />
      <input
        type="text"
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
        placeholder="Account Type"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
