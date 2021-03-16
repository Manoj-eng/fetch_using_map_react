import React, {useState} from 'react'
import Input from '../Components/Input'

const Form = () => {
  const arrData =  [
    {
        "userId": 1,
        "id": 1,
        "title": "Dark Chocolate",
        "body": "too sweet"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "White Chocolate",
        "body": "White in Colour"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "Milk Chocolate",
        "body": "Made from Milk"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "Vanilla IceCream",
        "body": "Awesome Taste"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "Genato IceCream",
        "body": "Tasty n Healthy"
      }
      
    ]
    const [formData,setformData] = useState()
    
    
    const handleChange = (e) => {
        setformData(e.target.value)
    }

    const getFormData = (e) => {
        e.preventDefault();
        formData ? alert("Your selected value is " + formData) : alert("Please Make a Choice")
    }
     
   
    

    return (
       <form onSubmit={getFormData}>
           <p className="para">CHOCOLATES AND ICE-CREAMS</p>

        {arrData.map((items) => <div className="valuecome">{items.title}<Input type="radio" name="healthychocos" id="" value={items.title}  onChange={handleChange} /></div> )}
        <button type="submit" className="mybtn"><b>SUBMIT</b></button> 
        <button type="reset" className="resbtn" onClick={()=>setformData("")}><b>CANCEL</b></button>
        
       </form>
    )
}

export default Form








