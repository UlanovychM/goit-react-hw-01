/* eslint-disable react/prop-types */
const TransactionHistory = ({ items }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>
			{items.map(({ id, type, amount, currency }) => {
				return (
					<tbody key={id}>
						<tr>
							<td>{type}</td>
							<td>{amount}</td>
							<td>{currency}</td>
						</tr>
					</tbody>
				);
			})}
		</table>
	);
};

export default TransactionHistory;
