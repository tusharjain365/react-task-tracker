import {ListItem,makeStyles,ListItemText,ListItemIcon} from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles(theme=>({
    item:{
        border:'1px solid grey',
        margin:'.3rem auto',
        borderRadius:'8px',
        transition:'all 0.2s ease',
        display:'flex',
        justifyContent:'flex-start',
        '&:hover':{
            boxShadow:'2px 2px 8px black',
        },
        '& >*':{
            width:'4rem',
        },
        
    },
    
}));

const ExpenseItem = ({transaction,deleteTransaction})=>{
    const design = useStyles();
    const color = transaction.amount>=0?'green':'red';
    const symbol = transaction.amount>=0?'$':'-$';
    const amount = symbol + Math.abs(transaction.amount);
    return (
        <ListItem className={design.item} style={{borderLeft:`5px solid ${color}`}}>
            <ListItemIcon style={{cursor:'pointer'}}><DeleteOutlinedIcon onClick={()=>deleteTransaction(transaction.id)} /></ListItemIcon>
            <ListItemText>{transaction.name}</ListItemText>
            <ListItemText style={{color:`${color}`}}>{`${amount}`}</ListItemText>
        </ListItem>
    )
}

export default ExpenseItem;