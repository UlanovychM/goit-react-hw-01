/* eslint-disable react/prop-types */
import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
	return (
		<table className={css.transaction}>
			<thead className={css.headersRow}>
				<tr className={css.valuesRow}>
					<th className={css.columnHeader}>Type</th>
					<th className={css.columnHeader}>Amount</th>
					<th className={css.columnHeader}>Currency</th>
				</tr>
			</thead>
			{items.map(({ id, type, amount, currency }) => {
				return (
					<tbody className={css.valuesRow} key={id}>
						<tr>
							<td className={css.transactionData}>{type}</td>
							<td className={css.transactionData}>{amount}</td>
							<td className={css.transactionData}>{currency}</td>
						</tr>
					</tbody>
				);
			})}
		</table>
	);
};

export default TransactionHistory;
