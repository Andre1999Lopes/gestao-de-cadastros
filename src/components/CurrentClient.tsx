import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import IClient from '../interfaces/IClient';
import * as uuid from 'uuid';
import LocalStorage from '../services/LocalStorage';
import ButtonWrapper from './ButtonWrapper';
import Form from './Form';

const initialValues:IClient = {
	id: '',
	name: '',
	email: '',
	phone: '',
	address: '',
	houseNumber: '',
	city: '',
	state: ''
};

interface IProps {
	op: string,
	client?: IClient,
	setOp: React.Dispatch<React.SetStateAction<string>>,
	setMessage: React.Dispatch<React.SetStateAction<string>>,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
	setClients: React.Dispatch<React.SetStateAction<IClient[]>>,
	setShowSnackbar:React.Dispatch<React.SetStateAction<boolean>>,
}

export default function CurrentClient({
	op,
	client,
	setOp,
	setMessage,
	setOpen,
	setClients,
	setShowSnackbar
}: IProps):JSX.Element {
	const [values, setValues] = useState(client || initialValues);

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const client = {
			...values,
			id: uuid.v4()
		};
		setValues(client);
		
		if(Object.values(client).includes('')) {
			setMessage('Preencha todos os campos!');
			setShowSnackbar(true);
			setTimeout(() => setShowSnackbar(false), 3000);
		}
		else {
			if (op == 'edit') {
				const clientList = LocalStorage.getClients();
				for (let i = 0; i < clientList.length; i++) {
					if (clientList[i].id == client.id) {
						clientList[i] = client;
						break;
					}
				}
				const newClientList = LocalStorage.setClients(clientList);
				setClients(newClientList);
				setOpen(false);
				setOp('');
			}
			else {
				const newClient = values;
				const newClientList = LocalStorage.setClients(newClient);
				setClients(newClientList);
				setOpen(false);
			}
		}
	};

	return (
		<>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Input onChange={(e) => handleChange(e)} value={values.name} autoComplete='off' name='name' placeholder='Nome'/>
				<Input onChange={(e) => handleChange(e)} value={values.email} autoComplete='off' name='email' type='email' placeholder='E-mail'/>
				<Input onChange={(e) => handleChange(e)} value={values.phone} autoComplete='off' name='phone' type='number' placeholder='Telefone'/>
				<Input onChange={(e) => handleChange(e)} value={values.address} autoComplete='off' name='address' placeholder='Endereço'/>
				<Input onChange={(e) => handleChange(e)} value={values.houseNumber} autoComplete='off' name='houseNumber' type='number' placeholder='Número'/>
				<Input onChange={(e) => handleChange(e)} value={values.city} autoComplete='off' name='city' placeholder='Cidade'/>
				<Input onChange={(e) => handleChange(e)} value={values.state} autoComplete='off' name='state' placeholder='Estado'/>
				<ButtonWrapper>
					<Button as='button' type='submit' style={{margin: '.5em'}}>Salvar</Button>
					<Button onClick={() => {
						setValues(initialValues);
						setOpen(false);
					}} style={{margin: '.5em'}}>Cancelar</Button>
				</ButtonWrapper>
			</Form>
		</>

	);
}