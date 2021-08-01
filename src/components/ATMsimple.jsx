import { useState } from "react";

const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
};

const ATMsimple = () => {

    const [accountState, setAccountState] = useState(0);
    var deposit = 0;
    const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = event => {
    let newTotal = accountState + deposit;
    alert(`Account total = ${newTotal}`);
    setAccountState(newTotal);
    event.preventDefault();
  };
   
    return (
     <form onSubmit={handleSubmit}>
         
      <h2>Account Balance {accountState}</h2>
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
    );
}


export default ATMsimple;