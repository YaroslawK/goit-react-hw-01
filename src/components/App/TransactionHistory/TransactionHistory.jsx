import transactions from '/src/transactions.json';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';


function TransactionHistory() {
    return <div>
        {transactions.map(transaction => {
         return <TransactionHistoryItem
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
                key={transaction.id} />
            
     })}
 </div>   
}


export default TransactionHistory;