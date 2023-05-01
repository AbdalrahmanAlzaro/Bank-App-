const Card = ({ account }) => {
  return (
    <div>
      <h2>Customer Name: {account.customerName}</h2>
      <p>Account Number: {account.accountNumber}</p>
      <p>Account Type : {account.accountType}</p>
    </div>
  );
};
export default Card;
