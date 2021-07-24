import IClient from '../interfaces/IClient';
import IProduct from '../interfaces/IProduct';

class LocalStorage {

	static setInitialLocalStorage():void {
		const clients:IClient[] = JSON.parse(String(localStorage.getItem('clients')));
		const products:IProduct[] = JSON.parse(String(localStorage.getItem('products')));

		if (!clients) {
			localStorage.setItem('clients', JSON.stringify(new Array<IClient>()));
		}

		if (!products) {
			localStorage.setItem('products', JSON.stringify(new Array<IProduct>()));
		}
	}

	// clients
	static getClients():IClient[] {
		const clients:IClient[] = JSON.parse(String(localStorage.getItem('clients')));
		return clients;
	}

	static getClient(id:string):IClient {
		const clients:IClient[] = JSON.parse(String(localStorage.getItem('clients')));
		const client = clients.filter(client => client.id === id);
		
		return client[0];
	}

	static setClients(newClient: IClient | IClient[]):Array<IClient> {
		if (Array.isArray(newClient)) {
			localStorage.setItem('clients', JSON.stringify(newClient));
			return newClient;
		}

		const clients:IClient[] = JSON.parse(String(localStorage.getItem('clients')));
		clients.push(newClient);
		localStorage.setItem('clients', JSON.stringify(clients));

		return clients;
	}

	static deleteClient(id: string): IClient[] {
		const clients:IClient[] = JSON.parse(String(localStorage.getItem('products')));
		const newClientList = clients.filter(client => client.id !== id);
		localStorage.setItem('products', JSON.stringify(newClientList));
		return newClientList;
	}

	// products
	static getProducts():IProduct[] {
		const products:IProduct[] = JSON.parse(String(localStorage.getItem('products')));
		return products;
	}

	static getProduct(id:string):IProduct {
		const products:IProduct[] = JSON.parse(String(localStorage.getItem('products')));
		const product = products.filter(client => client.id === id);
		return product[0];
	}

	static setProducts(newProduct: IProduct | IProduct[]):Array<IProduct> {
		if (Array.isArray(newProduct)) {
			localStorage.setItem('products', JSON.stringify(newProduct));
			return newProduct;
		}
		const products:IProduct[] = JSON.parse(String(localStorage.getItem('products')));
		products.push(newProduct);
		localStorage.setItem('products', JSON.stringify(products));
		return products;
	}

	static deleteProduct(id: string): IProduct[] {
		const products:IProduct[] = JSON.parse(String(localStorage.getItem('products')));
		const newProductList = products.filter(client => client.id !== id);
		localStorage.setItem('products', JSON.stringify(newProductList));
		return newProductList;
	}
}

export default LocalStorage;