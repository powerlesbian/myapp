const numbers = [1, 2, 3, 4, 5];

const Lists = () => {
 return (
     <div className = "app2">      
        <h1>My list</h1>
         {numbers.map((number, index) => 
                {
                return <li key={index.toString()}>{number}</li>;
                }
             )
         }
    </div>
  );
}
export default Lists;