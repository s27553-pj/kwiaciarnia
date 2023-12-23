const delivery=8.99
let totalPrice=0
const flowers = {
	'rose-white': {
		name: 'Biała róża',
		picture: 'rose-white.jpg',
		describe:
			'W kontekście miłości symbolizuje czystość uczuć i jest często używana w bukietach ślubnych, wyrażając uczucie nowo zawartego związku. Ponadto, biała róża jest również symbolem pamięci i hołdu, często obecna na ceremoniach pogrzebowych.',
		price:10,
	},
	'rose-pink': {
		name: 'Różowa róża',
		picture: 'rose-pink.jpg',
		describe:
			'Różowa róża jest tradycyjnym symbolem romantycznej miłości. Jasne odcienie różu reprezentują czystość uczuć i niewinność, podczas gdy intensywniejsze barwy mogą symbolizować głębokie zaangażowanie i pasję. Róże te są często używane w bukietach miłosnych i są obecne podczas różnych okazji związanych z uczuciem',
		price:10,
	},
	'rose-orange': {
		name: 'Pomarańczowa róża',
		picture: 'rose-orange.jpg',
		describe:
			'Pomarańczowa róża może być używana jako wyraz uznania czy podziękowania. Jej barwa symbolizuje życiową energię i zapał do działania. Kwiat ten może być doskonałym prezentem dla osób, które chcą przekazać pozytywne emocje i wyrazić podziw wobec drugiej osoby.',
		price:10,
	},
	'rose-yellow': {
		name: 'Żółta róża',
		picture: 'rose-yellow.jpg',
		describe:
			'Ten kwiat jest często używany do wyrażenia wdzięczności, przywiązania oraz do przekazywania pozytywnych życzeń. Żółta róża może być doskonałym prezentem dla przyjaciół, rodziny lub innych bliskich osób, aby podkreślić radość z ich obecności w naszym życiu. W kontekście romantycznym żółta róża może symbolizować przyjaźń przechodzącą w miłość. Jest to delikatny sposób wyrażenia zainteresowania i uczuć bez konieczności używania intensywnie czerwonych róż.',
	price:10,
	},
	'peony-pink': {
		name: 'Różowa piwonia',
		picture: 'peony-pink.jpg',
		describe:
			'Symbolizuje ona miłość, szczęście i zdrowie. Różowa piwonia jest często kojarzona z romantycznymi gestami i jest doskonałym wyborem na prezent dla ukochanej osoby. Jej elegancka prezencja sprawia, że jest również często wybierana na okazje specjalne, takie jak śluby czy rocznice. Dodatkowo, różowa piwonia jest symbolem delikatności, płodności i piękna. Jej obecność w bukiecie może dodatkowo podkreślić uczucia troski, szacunku i uznania. To kwiat, który przyciąga uwagę i wprowadza do otoczenia nutę romantyzmu.',
		price:15,
	},
	'lily-red': {
		name: 'Czerwona lilia',
		picture: 'lily-red.jpg',
		describe:
			'Czerwona lilia jest często wybierana na bukiety okolicznościowe, takie jak śluby czy rocznice, gdzie wyraża głębokie uczucia i oddanie. Jej piękno i delikatność sprawiają, że jest również chętnie stosowana w aranżacjach kwiatowych o wyrafinowanym charakterze.',
		price:12,
	},
	'lily-white': {
		name: 'Biała lilia',
		picture: 'lily-white.jpg',
		describe:
			'Biała lilia jest symbolem czystości, niewinności i delikatności. Jej piękne, białe płatki sprawiają, że jest popularnym wyborem na różnego rodzaju uroczystości, zwłaszcza tych związanych z miłością i nowym początkiem. To kwiat o długiej historii, obecny w kulturze i symbolice wielu społeczeństw.Kwiaty białej lilii są często używane w bukietach ślubnych, gdzie reprezentują czystość uczuć i wierność. Ich subtelny zapach dodaje romantyzmu i sprawia, że są one doskonałym wyborem na wyjątkowe okazje.',
		price:12,
	},
	'cornation-red': {
		name: 'Goździk',
		picture: 'cornation-red.jpg',
		describe:
			'W tradycji kwiatowej goździk symbolizuje miłość, namiętność i powodzenie. Jest również często używany w bukietach ślubnych i dekoracjach kwiatowych z okazji różnych uroczystości.',
		price:9,
	},
}
function updateInformation(flowername) {
	const flower = flowers[flowername]
	console.log('Updating information for', flowername)
	if (flower) {
		document.getElementById('flowername').textContent = flower.name
		document.getElementById('flowerimg').src = flower.picture
		document.getElementById('describeflower').textContent = flower.describe
		document.getElementById('flowernameinput').textContent = flower.name
		document.getElementById('flower-price').textContent = 'Cena: '+flower.price + 'zł'
		document.getElementById('priceinput').value=flower.price
	}
}
const url = new URLSearchParams(window.location.search)
const flowernameParam = url.get('name')

if (flowernameParam) {
	console.log('Flower name parameter found:', flowernameParam)
	updateInformation(flowernameParam)
}
let order=[];
function addtocart(flowername, event) {
	event.preventDefault()
	let cart = document.forms['calculate']['quantity'];
	let flowernametext = document.getElementById('flowername').innerText
	let price = document.getElementById('priceinput').value;
	let flowerimg=document.getElementById('flowerimg').src
	 order.push( {
		name: flowernametext,
		quantity: cart.value,
		 price: price,
		 picture:flowerimg,
	});

	alert('dodano zamowienie ' + flowernametext + ' ilośc: ' + cart.value)
	cart.value=1;
	gotohomepage(order)
}
function gotohomepage(order) {
	//window.location.assign('./index.html')
	let flowerdetails = document.getElementById('flower-details');
	let container = document.getElementById('container');
	let basket = document.getElementById('basket')
	let title = document.getElementById('title')

	title.style.display='block'
	container.style.display = 'block';
	basket.style.display='none';
	flowerdetails.style.display = 'none';
	console.log(order)

}
function showdetails(flowername) {
	updateInformation(flowername);
	let flowerdetails = document.getElementById('flower-details');
	let container = document.getElementById('container');
	let basket = document.getElementById('basket')
	let title = document.getElementById('title')

	title.style.display='none'
	container.style.display = 'none';
	flowerdetails.style.display = 'block';
	basket.style.display='none';

}
function moveToCart(){
	updateInformation(flowername)
	let showorder = document.getElementById('showorder')
	let basket = document.getElementById('basket')
	let flowerdetails = document.getElementById('flower-details');
	let container = document.getElementById('container');
	let title=document.getElementById('title');
	let orderText=''
	let showprice = document.getElementById("showprice")
	let orderbody = document.getElementById('orderbody')
	let emptycart = document.getElementById('empty-cart')
	let button = document.getElementById('order');
	basket.style.display='block'
	console.log(order.length)
	if(order.length===0){
		emptycart.style.display='block'
		// showprice.innerText='Twój koszyk jest pusty'
		// showprice.style.display='block'
	}else {
		emptycart.style.display='none'
		showorder.style.display='block'
		calculateprice()
		//orderText = order.map(item => item.name + ' - ilość: ' + item.quantity + ' cena: ' + item.price + 'zł szt').join('\n');
		orderText = ''
		order.forEach(item =>{
			orderText += `<tr>
							<td><img src="${item.picture}" style="width:70px;height: 70px;" </td>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>${item.price} zł</td>
                        </tr>`;		})
		orderbody.innerHTML = orderText;
		button.style.display='block'
	}


	container.style.display='none'
	flowerdetails.style.display='none'
	title.style.display='none'
	showprice.style.display='block'


}
function calculateprice() {
	let showprice=document.getElementById('showprice');
	//let price = document.getElementById('priceinput').value
	// let quantity =
	//let finalprice = parseInt(price) * parseInt(order.quantity)
	// let finalprice = parseFloat(order.price) * parseInt(order.quantity);
	// console.log(order.quantity)
	// console.log(" price:",parseInt(price));
	// console.log("Parsed quantity:", parseInt(quantity))
	 totalPrice = order.reduce((acc, orderItem) => {
		let price = parseFloat(orderItem.price);
		let quantity = parseInt(orderItem.quantity)
			return acc + quantity * price;
		},0)
	console.log(totalPrice);
	showprice.innerText='wartość koszyka: '+totalPrice.toFixed(2) + 'zł'

}let contacts = [];

function final(event) {
	event.preventDefault();
	let container = document.getElementById('finalorder');
	container.style.display = 'block';
	let button = document.getElementById('order');
	button.style.display = 'none';
	console.log(contacts);
}
document.addEventListener('DOMContentLoaded',function (){
	const form = document.forms['contact']
	form.addEventListener('submit', function (event){
		event.preventDefault()
		if(!valPhoneNumber() || !valPostCode()){
			alert("Popraw błędy w formularzu")
		}else{
			display()
		}
	})
function valPhoneNumber(){
	const phoneinput=form.elements['phone']
	const phonepattern=/[0-9]{3}[0-9]{3}[0-9]{3}/
	if(!phonepattern.test(phoneinput.value)){
		alert("Wprowadź poprawny numer telefonu")
		return false;
	}
	return true
}
function valPostCode(){
	const codeinput =  form.elements['postcode']
	const codepattern=/[0-9]{2}-[0-9]{3}/
	if(!codepattern.test(codeinput.value)) {
		alert("Wprowadz poprawny kod pocztowy")
		return false
	}
	return true
}
	function display() {
		let name = document.getElementById('name').value;
		let surname = document.getElementById('surname').value;
		let email = document.getElementById('email').value;
		let phonenumber = document.getElementById('phonenumber').value;
		let postcode = document.getElementById('postcode').value;
		let city = document.getElementById('city').value;
		let street = document.getElementById('street').value;
		let housenumber = document.getElementById('housenumber').value;
		let apartmentnumber = document.getElementById('apartmentnumber').value;
		if(name)
			contacts.push({
				name: name,
				surname: surname,
				email: email,
				phonenumber: phonenumber,
				postcode: postcode,
				city: city,
				street: street,
				housenumber: housenumber,
				apartmentnumber: apartmentnumber,
			});
		let displaycontacts = document.getElementById('displaycontacts');
		let contactstext = '';
		contacts.forEach((item) => {
			contactstext = `\nImię: ${item.name}\nNazwisko: ${item.surname}\nE-mail: ${item.email}\nNumer telefonu: ${item.phonenumber}\nAdres: ${item.street} ${item.housenumber} ${item.apartmentnumber} ${item.postcode} ${item.city}\n\n`;
		});
		let dp=document.getElementById('display')
		dp.style.display='block'
		displaycontacts.innerText += contactstext;
		let button = document.getElementById('displaybtn');
		let showprice = document.getElementById("showprice")

		button.style.display = 'none';
		showprice.style.display='none'
		let formcontact=document.getElementById('formcontact');
		formcontact.style.display='none'
		let summary = document.getElementById('summary')
		summarytext=`
			<p>Wartość koszyka: ${totalPrice.toFixed(2)} zł</p>
		<p>Dostawa: ${delivery} zł</p>
		<hr class="my-2">
			<p>Razem: ${(totalPrice + delivery).toFixed(2)} zł</p>
			`;
		summary.innerHTML=summarytext
		summary.style.display='block'
		let accept = document.getElementById('accept')
		accept.style.display='block'
	}
})
function endorder(){
	let basket=document.getElementById('basket')
	let field = document.getElementById('finalorder')
	let enddiv=document.getElementById('end')
	enddiv.style.display='block'
	basket.style.display='none'
	field.style.display='none'
	refresh()
}
function refresh(){
	let time=7000
	setTimeout(function () {
		location.reload();
	},time)

}


