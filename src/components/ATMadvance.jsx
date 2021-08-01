import { useState } from "react";

const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
    return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};


const ATMadvance = () => {

    let deposit = 0; // state of this transaction
    const [totalState, setTotalState] = useState(0);
    const [isDeposit, setIsDeposit] = useState(true);

    let status = `Account Balance $ ${totalState} `;
    //console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    
    const handleChange = event => {
        //console.log(`handleChange ${event.target.value}`);
        deposit = Number(event.target.value);
    };
    
    const handleSubmit = (event) => {
        let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
        setTotalState(newTotal);
        event.preventDefault();
    };

    return (

        <form onSubmit={handleSubmit}>
            <h2 id="total">{status}</h2>
            <button onClick={() => setIsDeposit(true)}>Deposit</button>
            <button onClick={() => setIsDeposit(false)}>Cash Back</button>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
        </form>

    );
}


export default ATMadvance;