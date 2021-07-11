import { Box ,Typography, makeStyles,TextField, Button} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    expenseInput:{
        display:'flex',
        flexDirection:'column',
        '& > *':{
            marginBottom:'.3rem',
            textTransform:'capitalize',
            fontWeight:600,
            marginRight:'.3rem',
            marginLeft:'.3rem',
        }
    }
});

const ExpenseInput = ({newTransaction})=>{
    const design = useStyles();

    const [name,setName] = useState('');
    const [amount,setAmount] = useState('');
    const addTransaction = ()=>{
        const transaction = {
            id:Math.random()*1000,
            name:name,
            amount:+amount,
        }
        setName('');
        setAmount('');
        newTransaction(transaction);
    }
    return (
        <Box className={design.expenseInput}>
            <hr />
            <Typography>
                New Transaction
            </Typography>
            <TextField label="Name of activity goes here" onChange={(e)=> setName(e.target.value)} value={name }/>
            <TextField label="Amount spent or gained" onChange={(e) => setAmount(e.target.value)} value={amount}/>
            <Button variant="contained" style={{backgroundColor:'orange'}} onClick={addTransaction}>Add transaction</Button>
        </Box>
    );
}

export default ExpenseInput;