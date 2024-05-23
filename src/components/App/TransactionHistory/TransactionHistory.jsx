
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css'


function TransactionHistory({ items }) {
  return (
      <div className={css.transactionContainer}>
          <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
      </table>
      </div>
  );
}

export default TransactionHistory;
