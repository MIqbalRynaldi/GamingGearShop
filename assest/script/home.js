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


const popular = $('#popular');
const prosesShowProducts = ()=>{
	popular.empty();
	const slice = products.slice(1,5);
	slice.forEach((i)=>{
			popular.append(
			`
			<div class="w-full h-32 md:h-80 bg-purple-600 rounded-xl relative">
				<img src="assest/img/${i.link}" class="absolute w-full h-32 md:h-80">
				<div class="w-full h-16 bg-[rgba(147,51,234,0.8)] absolute bottom-0 text-md text-white p-2 flex flex-col">
					<label>${i.Nama}</label>
					<label>Rp.${i.Harga}</label>
				</div>
			</div>	
			`	
			);				
		});
	}
prosesShowProducts();