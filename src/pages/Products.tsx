import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import IProduct from '../interfaces/IProduct';
import LocalStorage from '../services/LocalStorage';
import Button from '../components/Button';
import Item from '../components/Item';
import Header from '../components/Header';
import ListWrapper from '../components/ListWrapper';
import Title from '../components/Title';
import ListTop from '../components/ListTop';
import List from '../components/List';
import Main from '../components/Main';
import CurrentProduct from '../components/CurrentProduct';

const initialProduct = {
	id: '',
	name: '',
	price: '',
	category: ''
};

export default function Client():JSX.Element {
	const [products, setProducts] = useState(Array<IProduct>());
	const [open, setOpen] = useState(false);
	const [op, setOp] = useState('');
	const [currentProduct, setCurrentProduct] = useState(initialProduct);
	const [showSnackbar, setShowSnackbar] = useState(false);
	const [message, setMessage] = useState('');

	const handleEditProduct = (id:string) => {
		setOp('edit');
		setCurrentProduct(LocalStorage.getProduct(id));
		setOpen(true);
	};

	const handleAddClick = () => {
		setCurrentProduct(initialProduct);
		setOpen(true);
	};

	const handleDeleteProduct = (id:string) => {
		const newProductList = LocalStorage.deleteProduct(id);
		setProducts(newProductList);
	};

	useEffect(() => {
		setProducts(LocalStorage.getProducts());
	}, []);

	return (
		<>
			<Main>
				<ListWrapper>
					<Header>
						<Title>Tela de produtos</Title>
						<Button onClick={() => handleAddClick()}>Adicionar</Button>
					</Header>
					<ListTop>
						<p style={{ width: '10%', display: 'inline-block', marginRight: '25%' }}>Produto</p>
						<p style={{ width: '10%', display: 'inline-block' }}>Preço</p>
					</ListTop>
					<List>
						{(products === null || products.length === 0) && <p>Nenhum produto registrado</p>}
						{products !== null && products.map(product => (
							(
								<Item data-key={product.id} key={product.id}>
									<p>{product.name}</p>
									<p>{'$' + product.price}</p>
									<Button onClick={() => handleEditProduct(product.id)} style={{margin: '1em 2em'}}>Editar</Button>
									<Button onClick={(() => handleDeleteProduct(product.id))} style={{margin: '1em 2em'}}>Excluir</Button>
								</Item>
							)
						))}
					</List>
				</ListWrapper>
			</Main>
			{open && <Modal message={message} showSnackbar={showSnackbar} open={open}>
				<CurrentProduct
					op={op}
					setOp={setOp}
					setShowSnackbar={setShowSnackbar}
					setMessage={setMessage}
					setProducts={setProducts}
					setOpen={setOpen} 
					product={currentProduct} />
			</Modal>}
		</>
	);
}