import React from 'react'

function Input({incomeData,expenseData}) {

    const sendDataToSate=(e)=>{
        e.preventDefault();
        let amount=document.querySelector("#inputValue");
        let reason=document.querySelector("#inputType");
        const type=document.querySelector(".selection").value;
        if(type==="Income"){
            incomeData({reason:reason.value,amount:amount.value})
            reason.value=""
            amount.value=""
        }else if(type==="Expense"){
            expenseData({reason:reason.value,amount:amount.value})
            reason.value=""
            amount.value=""
        }
        
        
    }


    return (
            <form className="form-inline p-1">
                <div className="form-group m-2">
                   <select className="btn btn-secondary selection ">
                       <option className="btn-success">Income</option>
                       <option className="btn-danger">Expense</option>
                   </select>
                </div>
                <div className="form-group m-2">
                <input className="form-control text-secondary" id="inputType" placeholder="What's Comming"/>
                </div>
                <div className="form-group m-2">
                <input className="form-control text-secondary" type="number" id="inputValue" placeholder="How Much It is..."/>
                </div>
                
                <button type="submit" onClick={sendDataToSate} className="btn btn-success m-2">Analyse</button>
            </form>
    )
}

export default Input
