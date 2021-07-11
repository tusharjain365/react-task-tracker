import { Typography, makeStyles,Box } from "@material-ui/core";
import { useState } from "react";
import Balance from './components/Balance'
import Expense from './components/Expense';
import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from './components/ExpenseList';

const useStyles = makeStyles(theme =>({
  header:{
    textAlign:'center',
    margin:'1.2rem auto',
    fontWeight:'600',
    [theme.breakpoints.down("xs")]:{
      fontSize:'1.5rem',
    },
  },
  tracker:{
    margin:'1.2rem auto',
    width:'60%',
    minHeight:'70vh',
    boxShadow:'-2px 2px 15px black',
    borderRadius:'8px',
    [theme.breakpoints.down("xs")]:{
      width:'90%',
    },
  },
}));

function App(){
  const design = useStyles();

  const [transactions,setTransactions] = useState([
    {id:1,name:'Travel',amount:-500},
    {id:2,name:'First salary',amount:50000},
    {id:3,name:'Clothes',amount:-2000},
  ]);

  const deleteTransaction = (id)=>{
    setTransactions(transactions.filter(transaction => transaction.id!==id));
  }

  const newTransaction = (transaction)=>{
    setTransactions((transactions)=> [transaction, ...transactions]);
  }
  return (
    <main>
      <Typography variant="h4" className={design.header}>Expense Task Tracker</Typography>
      <Box className={design.tracker}>
      <Balance transactions={transactions}/>
      <Expense transactions={transactions}/>
      <ExpenseInput newTransaction={newTransaction}/>
      <ExpenseList transactions={transactions} deleteTransaction={deleteTransaction}/>
      </Box>
    </main>
  );
}

export default App;
