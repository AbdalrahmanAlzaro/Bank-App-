import Card from "./Card";

const Main = ({
  accounts,
  setAccounts,
  setNumberOfAccounts,
  numberOfAccounts,
}) => {
  const handleDelete = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id));
    setNumberOfAccounts(numberOfAccounts - 1);
  };
  return (
    <div>
      {accounts.map((account) => (
        <div key={account.id}>
          <Card account={account} />
          <button onClick={() => handleDelete(account.id)}>
            Delete Account
          </button>
        </div>
      ))}
    </div>
  );
};
export default Main;
