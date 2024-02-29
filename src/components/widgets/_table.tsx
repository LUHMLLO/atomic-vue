
// import React from 'react';
// import Buttongroup from '@components/organisms/buttongroup';
// import Dropdown from '@components/organisms/dropdown.tsx';
// import { useNavigate } from 'react-router-dom';
// import Check from '@components/atoms/check.tsx';
// import { User } from '@interfaces/users.ts';

// interface ListProps {
// 	headings: string[];
// 	data: User[];
// 	className?: string;
// }

// export const Table_UsersList: React.FC<ListProps> = ({
// 	className = '',
// 	headings,
// 	data,
// }) => {
// 	const navigate = useNavigate();

// 	return (
// 		<div className='overflow-x-auto w-full rounded-5xs'>
// 			<table
// 				className={`bg-neutral-100 dark:bg-neutral-900 w-full text-left ${className}`}>
// 				<thead className='bg-neutral-200 dark:bg-neutral-800'>
// 					<tr>
// 						<th className='p-nm font-normal'>
// 							<Check />
// 						</th>
// 						{headings.map((columnName) => (
// 							<th key={columnName} className='p-nm'>
// 								{columnName}
// 							</th>
// 						))}
// 						<th className='p-nm text-right'>
// 							<Dropdown trailing_icon='more_vert'>
// 								<p>nothing to see here yet</p>
// 							</Dropdown>
// 						</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{data.map((dataRow, index) => (
// 						<tr key={index}>
// 							<td className='p-nm'>
// 								<Check />
// 							</td>
// 							<td className='p-nm'>{dataRow.idusuario}</td>
// 							<td className='p-nm'>{dataRow.idsocio}</td>
// 							<td className='p-nm'>{dataRow.nombreempresa}</td>
// 							<td className='p-nm'>{dataRow.email}</td>
// 							<td className='p-nm'>{dataRow.telefono}</td>
// 							<td className='p-nm'>{dataRow.direccion}</td>
// 							<td className='p-nm'>{dataRow.nombreusuario}</td>
// 							<td className='p-nm'>{dataRow.estado}</td>
// 							<td className='p-nm text-right'>
// 								<Buttongroup
// 									borderless
// 									filled
// 									rounded
// 									buttons={[
// 										{
// 											leading_icon: 'visibility',
// 											onClick: () => navigate(`/users/${dataRow.idusuario}`),
// 										},
// 									]}
// 								/>
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };

// interface DetailsProps {
// 	headings: string[];
// 	data: User;
// 	className?: string;
// }

// export const Table_UserDetails: React.FC<DetailsProps> = ({
// 	className = '',
// 	data,
// 	headings,
// }) => {
// 	return (
// 		<div className='overflow-x-auto w-full rounded-5xs'>
// 			<table
// 				className={`bg-neutral-100 dark:bg-neutral-900 w-full text-left ${className}`}>
// 				<thead className='bg-neutral-200 dark:bg-neutral-800'>
// 					<tr>
// 						{headings.map((columnName) => (
// 							<th key={columnName} className='p-nm'>
// 								{columnName}
// 							</th>
// 						))}
// 						<th className='p-nm text-right'>Edit</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr>
// 						<td className='p-nm'>{data.idusuario}</td>
// 						<td className='p-nm'>{data.idsocio}</td>
// 						<td className='p-nm'>{data.nombreempresa}</td>
// 						<td className='p-nm'>{data.email}</td>
// 						<td className='p-nm'>{data.telefono}</td>
// 						<td className='p-nm'>{data.direccion}</td>
// 						<td className='p-nm'>{data.nombreusuario}</td>
// 						<td className='p-nm'>{data.estado}</td>
// 						<td className='p-nm text-right'>
// 							<Buttongroup
// 								borderless
// 								filled
// 								rounded
// 								buttons={[
// 									{
// 										leading_icon: 'edit',
// 									},
// 									{
// 										leading_icon: 'delete',
// 									},
// 								]}
// 							/>
// 						</td>
// 					</tr>
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };
