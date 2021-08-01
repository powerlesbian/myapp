import { useState } from "react";
import { Button } from "react-bootstrap";

  const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const choice = ['Deposit', 'Cash Back'];
  //console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input id="number-input" type="number" width="200" onChange={onChange}></input>
      <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
    </label>
  );
};


const ATMBasic = () => {

  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [atmMode, setAtmMode] = useState('');
  const [validTransaction, setValidTransaction] = useState(false);
  const [txn, setTxn] = useState([]);

  var txnType;
 
  let status;

  if (totalState > 0) {status = `Your Account Balance $ ${totalState} `;} 
  else{status = <p className='statusp'>You have zero balance.Please make a deposit</p>}

  //let status = `Your Account Balance $ ${totalState} `;

  //console.log(`Account Rendered with isDeposit: ${isDeposit}`);



  
  const handleChange = (event) => {
    //console.log(Number(event.target.value));
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };
  
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);

    event.preventDefault();

    const newTxn = [...txn, {txnDate:new Date().toLocaleString(), txnTypes:txnType, amount:deposit}];
    setTxn(newTxn);
    
  };

  const handleModeSelect = (event) => {

    txnType = event.target.value;
    console.log(event.target.value);
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === 'Deposit') {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
    
  };

    return (
       <form onSubmit={handleSubmit}>
      <div>
        <h1 className='atmh1'>ATM Application (Demo)</h1>
        <h2 id="total">{status}</h2>
        <div>
                <Button variant="primary" onClick={(e) => handleModeSelect(e)} id="deposit-selection" value="Deposit" > Deposit </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="secondary" onClick={(e) => handleModeSelect(e)} id="cashback-selection" value="Cash Back">Cash Back </Button>
                 </div>
        
        {/* <label>Select an action below to continue</label>
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
          <option id="no-selection" value=""></option>
          <option id="deposit-selection" value="Deposit">
            Deposit
          </option>
          <option id="cashback-selection" value="Cash Back">
            Cash Back
          </option>
        </select> */}
        {/* {atmMode && ( */}
          <ATMDeposit
            onChange={handleChange}
            isDeposit={isDeposit}
            isValid={validTransaction}
          ></ATMDeposit>
        {/* )} */}
        <div className = "app2">      
        <h1>My Transaction</h1>
         {txn.map((txn, index) => 
                {
                return <li key={index.toString()}>{txn.txnDate} {txn.txnTypes} {txn.amount}</li>;
                }
             )
         }
    </div>

      </div>
    </form>
    );
}

export default ATMBasic;