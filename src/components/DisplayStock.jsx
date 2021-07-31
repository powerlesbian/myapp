import Button from 'react-bootstrap/Button'
import { useState } from 'react';

const DisplayStock = () => {

    //inital stock
    
    const [stock, setStock] = useState(
            [
                { name: "apple", instock: 2 },
                { name: "pineapple", instock: 3 },
                { name: "pear", instock: 0 },
                { name: "peach", instock: 3 },
                { name: "orange", instock: 1 }
            ]
        );
    
        // Do shopping
    const moveToCart = (e) => {
        e.preventDefault();
        let [name, num] = e.target.innerHTML.split(":");
        let newStock = stock.map((item, index) => 
                {
                    if (num === 0) return item;
                    if (item.name === name) item.instock--;                     
                    return item;                
                }
            );
            setStock(newStock);   
        };

       
 return (
     
     <div className = "app3">      
        <h1>Our Stock</h1>
         {stock.map((item, index) => 
                {
                    
                    if (item.instock>0){
                        
                return (
                     <>
                        <Button variant="primary" onClick={moveToCart} key={index.toString()}>{item.name}:{item.instock}</Button>{' '}
                    </>
                    )
                }
                }
             )
         }
    </div>
  );
}

export default DisplayStock;