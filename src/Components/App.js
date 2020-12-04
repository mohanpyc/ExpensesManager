import React from 'react'
import Expenses from './Expenses'
import Income from './Income'
import Input from './Input'


class App extends React.Component {

    state={
        income:[],
        expense:[],
        total:"What's Remaining : ₹ 00"
    }

    updateIncome=(data)=>{
        let incomeAmountArray=this.state.income.length>0?this.state.income.map(i=>i.amount):[0]
        let incomeAmount=incomeAmountArray.reduce((a,b)=>parseInt(a)+ parseInt( b))
        let expenseAmountArray=this.state.expense.length>0?this.state.expense.map(i=>i.amount):[0]
        let expenseAmount=expenseAmountArray.reduce((a,b)=>parseInt(a)+ parseInt( b))
        let sum=parseInt(incomeAmount)-parseInt(expenseAmount)+parseInt(data.amount)
        console.log(parseInt(incomeAmount),incomeAmount,"incomeAmount")
        this.setState({
            income:[...this.state.income,data],
            total:`what's Remaining : ₹ ${sum}`
        })
    }

    updateExpense=(data)=>{
        let incomeAmountArray=this.state.income.length>0?this.state.income.map(i=>i.amount):[0]
        let incomeAmount=incomeAmountArray.reduce((a,b)=>parseInt(a)+ parseInt( b))
        let expenseAmountArray=this.state.expense.length>0?this.state.expense.map(i=>i.amount):[0]
        let expenseAmount=expenseAmountArray.reduce((a,b)=>parseInt(a)+ parseInt( b))
        let sum=parseInt(incomeAmount)-parseInt(expenseAmount)-parseInt(data.amount)
        this.setState({
            expense:[...this.state.expense,data],
            total:`what's Remaining : ₹ ${sum}`
        })
    }

    deleteExpense=(expense)=>{
        let newExpense=this.state.expense.filter(i=> this.state.expense.indexOf(i) !==expense)
        let incomeAmountArray=this.state.income.length>0?this.state.income.map(i=>i.amount):[0]
        let incomeAmount=incomeAmountArray.reduce((a,b)=>parseInt(a)+ parseInt( b))
        let newExpenseAmountArray=newExpense.length>0?newExpense.map(i=>i.amount):[0]
        let newExpenseAmount=newExpenseAmountArray.reduce((a,b)=>parseInt(a)+ parseInt( b))
        let sum=parseInt(incomeAmount)-parseInt(newExpenseAmount)
        this.setState({
            expense:[...newExpense],
            total:`what's Remaining : ₹ ${sum}`
        })
    }
    deleteIncome=(income)=>{
        let newIncome=this.state.income.filter(i=> this.state.income.indexOf(i)!==income)
        let newIncomeAmountArray=newIncome.length>0?newIncome.map(i=>i.amount):[0]
        let newIncomeAmount=newIncomeAmountArray.reduce((a,b)=>parseInt(a)+ parseInt( b))
        let expenseAmountArray=this.state.expense.length>0?this.state.expense.map(i=>i.amount):[0]
        let expenseAmount=expenseAmountArray.reduce((a,b)=>parseInt(a)+ parseInt( b))
        let sum=parseInt(newIncomeAmount)-parseInt(expenseAmount)
        this.setState({
            income:[...newIncome],
            total:`what's Remaining : ₹ ${sum}`
        })
    }


    render() {
        console.log(this.state)
        return (
            <div className="container-fluid">
                <div className=" d-flex justify-content-center text-primary">
                    <h1 className='display-1'>Expenses Manager</h1>
                </div>

                <div className="d-flex justify-content-center">
                    <h2 className="display-3">{this.state.total}</h2>
                </div>

                <div className="d-flex justify-content-center">
                   <Input incomeData={this.updateIncome} expenseData={this.updateExpense}/>
                </div>
                <div className="row">
                    <div className="col-lg-12 H-100">
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <Income listOfIncome={this.state.income} deleteIncome={this.deleteIncome}/>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <Expenses listOfExpense={this.state.expense}  deleteExpense={this.deleteExpense}/>
                    </div>
                </div>
            </div>         
        )
    }
}

export default App
