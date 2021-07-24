import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import IClient from '../interfaces/IClient';
import LocalStorage from '../services/LocalStorage';
import CurrentClient from '../components/CurrentClient';
import Button from '../components/Button';
import Item from '../components/Item';
import Header from '../components/Header';
import ListWrapper from '../components/ListWrapper';
import Title from '../components/Title';
import ListTop from '../components/ListTop';
import List from '../components/List';
import Main from '../components/Main';

const initialClient = {
	id: '',
	name: '',
	phone: '',
	email: '',
	address: '',
	houseNumber: '',
	city: '',
	state: '',
};

export default function Client():JSX.Element {
	const [clients, setClients] = useState(Array<IClient>());
	const [open, setOpen] = useState(false);
	const [op, setOp] = useState('');
	const [currentClient, setCurrentClient] = useState(initialClient);
	const [showSnackbar, setShowSnackbar] = useState(false);
	const [message, setMessage] = useState('');

	const handleEditClient = (id:string) => {
		setOp('edit');
		setCurrentClient(LocalStorage.getClient(id));
		setOpen(true);
	};

	const handleAddClick = () => {
		setCurrentClient(initialClient);
		setOpen(true);
	};

	const handleDeleteClient = (id:string) => {
		const newClientList = LocalStorage.deleteClient(id);
		setClients(newClientList);
	};

	useEffect(() => {
		setClients(LocalStorage.getClients());
	}, []);

	return (
		<>
			<Main>
				<ListWrapper>
					<Header>
						<Title>Tela de clientes</Title>
						<Button onClick={() => handleAddClick()}>Adicionar</Button>
					</Header>
					<ListTop>
						<p style={{ width: '10%', display: 'inline-block', marginRight: '25%' }}>Nome</p>
						<p style={{ width: '10%', display: 'inline-block' }}>E-mail</p>
					</ListTop>
					<List>
						{(clients === null || clients.length === 0) && <p>Nenhum cliente registrado</p>}
						{clients !== null && clients.map(client => (
							(
								<Item data-key={client.id} key={client.id}>
									<p>{client.name}</p>
									<p>{client.email}</p>
									<Button onClick={() => handleEditClient(client.id)} style={{margin: '1em 2em'}}>Editar</Button>
									<Button onClick={(() => handleDeleteClient(client.id))} style={{margin: '1em 2em'}}>Excluir</Button>
								</Item>
							)
						))}
					</List>
				</ListWrapper>
			</Main>
			{open && <Modal message={message} showSnackbar={showSnackbar} open={open}>
				<CurrentClient
					op={op}
					setOp={setOp}
					setShowSnackbar={setShowSnackbar}
					setMessage={setMessage}
					setClients={setClients}
					setOpen={setOpen} 
					client={currentClient} />
			</Modal>}
		</>
	);
}