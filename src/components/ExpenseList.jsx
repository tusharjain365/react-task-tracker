import {Box, Typography,makeStyles, List} from '@material-ui/core'
import ExpenseItem from './ExpenseItem';
const useStyles = makeStyles({
    expenseList:{
        margin:'1rem .3rem',
        textAlign:'center',
    }
});
const ExpenseList = ({transactions,deleteTransaction})=>{
    const design = useStyles();
    return(
        <Box className={design.expenseList}>
            <Typography variant="h5">Previous Transactions</Typography>
            <hr />
            <List>
                {transactions.map(transaction => <ExpenseItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />)}
            </List>
        </Box>
    )
}

export default ExpenseList;