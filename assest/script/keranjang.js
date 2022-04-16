const products = [
	{
		'id' : 1,
		'Nama' : 'Keyboard Logitech',
		'Harga' : '500.000',
		'Kategori' : 'Keyboard',
		'link' : 'keyboard-logitech.jpg'
	},
	{
		'id' : 2,
		'Nama' : 'Acer',
		'Harga' : '12.500.000',
		'Kategori' : 'Laptop',
		'link' : 'Acer.jpeg'
	},
	{
		'id' : 3,
		'Nama' : 'Asus Rog',
		'Harga' : '13.500.000',
		'Kategori' : 'Laptop',
		'link' : 'AsusRog.jpg'
	},
	{
		'id' : 4,
		'Nama' : 'Headset Hybrid',
		'Harga' : '500.000',
		'Kategori' : 'Headset',
		'link' : 'Headset-hybrid.jpg'
	},
	{
		'id' : 5,
		'Nama' : 'Headset Logitech',
		'Harga' : '400.000',
		'Kategori' : 'Headset',
		'link' : 'Headset-Logitech.jpeg'
	},
	{
		'id' : 6,
		'Nama' : 'LG',
		'Harga' : '2.500.000',
		'Kategori' : 'Monitor',
		'link' : 'LG.jpg'
	},
	{
		'id' : 7,
		'Nama' : 'Mouse KSnake',
		'Harga' : '200.000',
		'Kategori' : 'Mouse',
		'link' : 'Mouse-KSnake.jpg'
	},
	{
		'id' : 8,
		'Nama' : 'Mouse Rexus',
		'Harga' : '300.000',
		'Kategori' : 'Mouse',
		'link' : 'Mouse-Rexus.jpg'
	},
	{
		'id' : 9,
		'Nama' : 'Samsung',
		'Harga' : '12.00.000',
		'Kategori' : 'Monitor',
		'link' : 'Samsung.jpg'
	},
	
]
const listProductsCart = $('#list-products-cart');
const prosesShowProducts = ()=>{
	if(localStorage.getItem('cart') == null || JSON.parse(localStorage.getItem('cart')).length == 0){
		Swal.fire({
		  icon: 'warning',
		  title: 'Ops, Keranjang Kosong.',
		  text: 'Coba Tambahkan Produk',
		})
	}else{
		const cart = JSON.parse(localStorage.getItem('cart'));
		listProductsCart.empty();
		cart.forEach((i)=>{
			let item = products[--i];
			listProductsCart.append(
			`
				<div class="w-full h-36 bg-purple-600 rounded-xl relative">
					<img src="assest/img/${item.link}" class="absolute w-full h-36">
					<div class="w-full h-16 bg-[rgba(147,51,234,0.8)] absolute bottom-0 text-md text-white p-2 flex flex-col">
						<label>${item.Nama}</label>
						<label>Rp.${item.Harga}</label>
					</div>
					<i class="fa fa-trash absolute right-0 top-0 text-white bg-[rgba(147,51,234,0.4)] p-2 cursor-pointer" onclick="prosesDeleteProducts(${item.id})"></i>
				</div>	
			`	
			);				
		});
		$('#btn-checkout').on('click',()=>{
			Swal.fire({
			  icon: 'success',
			  title: 'Yey, Barangmu Sedang Diproses.',
			  text: 'Tunggu Barangmu Sampai Rumah :)',
			})
			localStorage.removeItem('cart');
			window.location.href = "./products.html"
		})
	}
}

const prosesDeleteProducts = (id)=>{
	let cart = JSON.parse(localStorage.getItem('cart'));
	let filter = cart.filter((value)=>{
		return value != id;
	})

	localStorage.setItem('cart',JSON.stringify(filter));
	prosesShowProducts();
}
prosesShowProducts();