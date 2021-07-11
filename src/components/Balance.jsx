import {Box, Typography,makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme =>({
    box:{
        margin:'1.2rem .7rem',
        '& > *':{
            fontWeight:'550',
            padding:'.8rem .6rem',
        }
    }
}));
const Balance  = ({transactions})=>{
    const design = useStyles();
    let total = 0;
    Array.from(transactions,(transaction)=>{
        total+=transaction.amount;
    })
    const sign = (total< 0)?'-$':'$';
    total = Math.abs(total).toFixed(2);
    total = sign+total;
    return(
        <Box className={design.box}>
            <Typography>{`Balance : ${total}`}</Typography>
        </Box>
    )
}

export default Balance;