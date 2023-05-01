import Header from "./Header";

import Main from "./Main";

import Footer from "./Footer";
const Home = ({
  accounts,
  numberOfAccounts,
  setAccounts,
  setNumberOfAccounts,
}) => {
  return (
    <>
      <Header numberOfAccounts={numberOfAccounts} />
      <Main
        accounts={accounts}
        setAccounts={setAccounts}
        setNumberOfAccounts={setNumberOfAccounts}
        numberOfAccounts={numberOfAccounts}
      />
      <Footer />
    </>
  );
};
export default Home;
