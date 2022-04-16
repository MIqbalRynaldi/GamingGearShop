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

const listProducts = $('#list-products');
const prosesShowProducts = (Kategori = 'all')=>{
	listProducts.empty();
	if (Kategori == 'all') {
		products.forEach((i)=>{
			listProducts.append(
			`
				<div class="w-full h-32 bg-purple-600 rounded-xl relative">
					<img src="assest/img/${i.link}" class="absolute w-full h-32">
					<div class="w-full h-16 bg-[rgba(147,51,234,0.8)] absolute bottom-0 text-md text-white p-2 flex flex-col">
						<label>${i.Nama}</label>
						<label>Rp.${i.Harga}</label>
					</div>
					<i class="fa fa-cart-arrow-down absolute right-0 top-0 text-white bg-[rgba(147,51,234,0.4)] p-2 cursor-pointer" onclick="addToCart(${i.id})"></i>
				</div>		
			`	
			);
		})
	}else{
		products.forEach((i)=>{
			if(Kategori == i.Kategori){
				listProducts.append(
				`
				<div class="w-full h-32 bg-purple-600 rounded-xl relative">
					<img src="assest/img/${i.link}" class="absolute w-full h-32">
					<div class="w-full h-16 bg-[rgba(147,51,234,0.8)] absolute bottom-0 text-md text-white p-2 flex flex-col">
						<label>${i.Nama}</label>
						<label>Rp.${i.Harga}</label>
					</div>
					<i class="fa fa-cart-arrow-down absolute right-0 top-0 text-white bg-[rgba(147,51,234,0.4)] p-2 cursor-pointer" onclick="addToCart(${i.id})"></i>
				</div>	
				`	
				);				
			}
		})
	}
}

$('#search-products').on('keyup',(e)=>{
	const valInput = $('#search-products').val();
	listProducts.empty();
	const filterProducts = products.filter((i)=>{
		if(i.Nama.toLowerCase().indexOf(valInput.toLowerCase()) > -1){
			return i;
		}
	})

	filterProducts.forEach((i)=>{
		listProducts.append(
		`
			<div class="w-full h-32 bg-purple-600 rounded-xl relative">
				<img src="assest/img/${i.link}" class="absolute w-full h-32">
				<div class="w-full h-16 bg-[rgba(147,51,234,0.8)] absolute bottom-0 text-md text-white p-2 flex flex-col">
					<label>${i.Nama}</label>
					<label>Rp.${i.Harga}</label>
				</div>
				<i class="fa fa-cart-arrow-down absolute right-0 top-0 text-white bg-[rgba(147,51,234,0.4)] p-2 cursor-pointer" onclick="addToCart(${i.id})"></i>
			</div>		
		`	
		);				
	})
})

const addToCart = (id)=>{
	let cart;
	if(localStorage.getItem('cart') == null){
		localStorage.setItem('cart',JSON.stringify([id]));
	}else{
		cart = JSON.parse(localStorage.getItem('cart'));
		let same = false;
		cart.forEach((i)=>{
			if(i == id){
				same = true;
			}
		})
		if(same == false){
			cart.push(id);
			localStorage.setItem('cart',JSON.stringify(cart));			
			Swal.fire({
			  icon: 'success',
			  title: 'Berhasil.',
			  text: 'Produk Berhasil Ditambahkan',
			})
		}else{
			Swal.fire({
			  icon: 'warning',
			  title: 'Peringatan.',
			  text: 'Produk Sudah Ditambahkan',
			})
		}
	}
}


prosesShowProducts();
