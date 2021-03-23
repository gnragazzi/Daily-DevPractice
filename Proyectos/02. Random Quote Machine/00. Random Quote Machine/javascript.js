var quotes = [
['No hay caminos para la paz; la paz es el camino', 'Mahatma Gandhi'],
['La medida del amor es amar sin medida', 'San Agustín'],
['Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera', 'Albert Einstein'],
['La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco', 'Platón'],
['Todo lo que se come sin necesidad se roba al estómago de los pobres', 'Mahatma Gandhi'],
['No abras los labios si no estás seguro de que lo que vas a decir es más hermoso que el silencio', 'Proverbio árabe'],
['La verdadera sabiduría está en reconocer la propia ignorancia', 'Socrates'],
['Uno es dueño de lo que calla y esclavo de lo que habla', 'Freud'],
['El único hombre que no se equivoca es el que nunca hace nada', 'Goethe'],
['Si quieres cambiar al mundo, cámbiate a ti mismo', 'Mahatma Gandhi'],
['Convertid un árbol en leña y podrá arder para vosotros; pero ya no producirá flores ni frutos.', 'Rabindranath Tagore'],
['La paciencia es la más heroica de las virtudes, precisamente porque carece de toda apariencia de heroísmo.', 'Giacomo Leopardi'],
];
var check = true;
var newQuote = () =>{
	var randomNum = Math.floor(Math.random() * (quotes.length));
	document.getElementById('text').innerHTML = "\""+ quotes[randomNum][0] + "\"";
	document.getElementById('author').innerHTML = "- " + quotes[randomNum][1];
}
