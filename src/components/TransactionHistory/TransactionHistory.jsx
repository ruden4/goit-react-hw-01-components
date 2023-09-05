import css from '../TransactionHistory/TransactionHistory.module.css'
export const TransactionHistory = ({items}) => {
 return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className={css.value}>Type</th>
      <th className={css.value}>Amount</th>
      <th className={css.value}>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item => <tr className={css.line} key={item.id}>
      <td className={css.value}>{item.type}</td>
      <td className={css.value}>{item.amount}</td>
      <td className={css.value}>{item.currency}</td>
    </tr>)}
  </tbody>
</table>
 )
}
