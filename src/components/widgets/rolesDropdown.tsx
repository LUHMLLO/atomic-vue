// import React, { useEffect, useState } from 'react';
// import Dropdown from '@components/organisms/dropdown.tsx';
// import { Placement } from '@floating-ui/react-dom';
// import { useStore } from '@nanostores/react';

// interface Props {
// 	className?: string;
// 	position?: Placement | undefined;
// 	value?: string | number;
// 	onChange: (e: number) => void;
// }

// const RolesDropdown: React.FC<Props> = ({
// 	className,
// 	position = 'bottom',
// 	value,
// 	onChange,
// }) => {
// 	const [selectedRole, setSelectedRole] = useState('Seleccionar rol');
// 	const roles = useStore($roles);

// 	useEffect(() => {
// 		// Fetch roles only if they are not already loaded
// 		if (!roles.length) {
// 			GetRoles().then(() => {
// 				// console.log('Roles List Response', $roles.get());

// 				// Find and set the selected role if value is provided
// 				if (value) {
// 					const selected = roles.find((role) => role.id === value);
// 					if (selected) {
// 						setSelectedRole(selected.descripcion);
// 					}
// 				}
// 			});
// 		} else {
// 			// Find and set the selected role if value is provided
// 			if (value) {
// 				const selected = roles.find((role) => role.id === value);
// 				if (selected) {
// 					setSelectedRole(selected.descripcion);
// 				}
// 			}
// 		}
// 	}, [value, roles]); // Specify value and roles as dependencies

// 	const handleRoleChange = (role: Role) => {
// 		setSelectedRole(role.descripcion);
// 		onChange(role.id);
// 	};

// 	return (
// 		<Dropdown
// 			filled
// 			leading_icon='label'
// 			rounded
// 			text={selectedRole?.toString()}
// 			position={position}
// 			menuClassName='gap-5xs p-5xs'
// 			className={className}>
// 			{roles.length > 0 ? (
// 				roles.map((role) => (
// 					<li
// 						key={role.id}
// 						onClick={() => handleRoleChange(role)}
// 						className='cursor-pointer'>
// 						{role.descripcion}
// 					</li>
// 				))
// 			) : (
// 				<p>No roles available.</p>
// 			)}
// 		</Dropdown>
// 	);
// };

// export default RolesDropdown;
