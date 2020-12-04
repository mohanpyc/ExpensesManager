import React from 'react'

function Expenses({listOfExpense,deleteExpense}) {

    let item=listOfExpense.map((i,index)=>{
    return  <tr key={index}>
                <td className="text-info">{index+1}</td>
                <td className="text-info">{i.reason}</td>
                <td className="text-primary">{i.amount}</td>
                <td className="text-danger"> <i onClick={()=>deleteExpense(index)} className="fa fa-trash"> </i> </td>
            </tr>
    })

    return (
        <div className="container">
            <table className="table table-hover">
                <thead className="">
                    <tr>
                        <th scope="row">Item</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>            
                <tbody>
                    {item}
                </tbody>
            </table>
        </div>
    )
}

export default Expenses
