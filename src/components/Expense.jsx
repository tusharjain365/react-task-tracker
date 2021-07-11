import {Box, Card,CardContent,Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    container:{
        display:'flex',
        marginBottom:'1.2rem',
    },
    card:{
        width:'50%',
        margin:'auto .3rem',
    }
});
const Expense = ({transactions})=>{
    let pos=0;
    let neg=0;
    Array.from(transactions,(transaction)=>{
        if(transaction.amount>0) {
            pos+=transaction.amount;
        }else{
            neg+=transaction.amount;
        }
    });
    pos = pos.toFixed(2);
    neg = Math.abs(neg).toFixed(2);
    const design = useStyles();
    return (
        <Box className={design.container}>
            <Card variant="outlined" className={design.card}>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{color:'green'}}>{`$${pos}`}</Typography>
                </CardContent>
            </Card>
            <Card variant='outlined' className={design.card}>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography style={{color:'red'}}>{`$${neg}`}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Expense;