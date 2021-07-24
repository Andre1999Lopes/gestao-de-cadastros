import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import IProduct from '../interfaces/IProduct';
import * as uuid from 'uuid';
import LocalStorage from '../services/LocalStorage';
import ButtonWrapper from './ButtonWrapper';
import Form from './Form';

const initialValues:IProduct = {
	id: '',
	name: '',
	price: '',
	category: ''
};

interface IProps {
	op: string,
	product?: IProduct,
	setOp: React.Dispatch<React.SetStateAction<string>>,
	setMessage: React.Dispatch<React.SetStateAction<string>>,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
	setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
	setShowSnackbar:React.Dispatch<React.SetStateAction<boolean>>,
}

export default function CurrentClient({
	op,
	product,
	setOp,
	setMessage,
	setOpen,
	setProducts,
	setShowSnackbar
}: IProps):JSX.Element {
	const [values, setValues] = useState(product || initialValues);

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const product = {
			...values,
			id: uuid.v4()
		};
		setValues(product);
		
		if(Object.values(product).includes('')) {
			setMessage('Preencha todos os campos!');
			setShowSnackbar(true);
			setTimeout(() => setShowSnackbar(false), 3000);
		}
		else {
			if (op == 'edit') {
				const productList = LocalStorage.getProducts();
				for (let i = 0; i < productList.length; i++) {
					if (productList[i].id == product.id) {
						productList[i] = product;
						break;
					}
				}
				const newProductList = LocalStorage.setProducts(productList);
				setProducts(newProductList);
				setOpen(false);
				setOp('');
			}
			else {
				const newProduct = product;
				const newProductList = LocalStorage.setProducts(newProduct);
				setProducts(newProductList);
				setOpen(false);
			}
		}
	};

	return (
		<>
			<Form onSubmit={(e) => handleSubmit(e)}>
				<Input onChange={(e) => handleChange(e)} value={values.name} autoComplete='off' name='name' placeholder='Nome'/>
				<Input onChange={(e) => handleChange(e)} value={values.price} type='number' autoComplete='off' name='price' placeholder='Preço'/>
				<Input onChange={(e) => handleChange(e)} value={values.category} autoComplete='off' name='category' placeholder='Categoria'/>
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