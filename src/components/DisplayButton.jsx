import Button from 'react-bootstrap/Button'

const menuItems = [1, 2, 3, 4, 5];
const DisplayButton = () => {
 return (
     <div className = "app3">      
        <h2>My Rendering Execise</h2>
         {menuItems.map((number, index) => 
                {
                return (
                     <>
                        <Button variant="primary" key={index.toString()}>{number} </Button>{' '}
                    </>
                    )
                }
             )
         }
    </div>
  );
}

export default DisplayButton;