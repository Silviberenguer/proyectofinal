//Cambio de color de fondo del body; aleatorio hasta el color 200,200,200 cada 3segundos

let target=document.body; /*Va a afectar al body, por lo tanto a las seccioes 
que no tengan preestablecido un background color*/

	function changeBgColor() { /*Declaramos la funcion changeBgColo*/
		
		target.style.background=getRandomColor(); /*Le decimos que tenga como target el cambio de estilo 
		del fondo, sustituyendolo por la función getRandomColor, que se declarará acontinuación*/ 
		
		setTimeout(changeBgColor,3000); /*Establecemos el tiempo entre cambios de color*/
	}

	function getRandomColor() { //declaramos funcion getrandomcolor
		const valor_limite = 200; //máximo valor será 200,200,200
		
		let red  = getRandomNumber(valor_limite); /*le decimos en a la variable red que saque
		un número random entre los que entran en el valor_limite, definidos en la anterior constante/variable*/
		
		let green = getRandomNumber(valor_limite); /*le decimos en a la variable green que saque
		un número random entre los que entran en el valor_limite, definidos en la anterior constante/variable*/
		
		let blue = getRandomNumber(valor_limite); /*le decimos en a la variable blue que saque
		un número random entre los que entran en el valor_limite, definidos en la anterior constante/variable*/
		return 'rgb('+red+','+green+','+blue+')'; //unimos los stings añadiendo los valores
	}

	function getRandomNumber(valor_limite){ /*Declaramos la funcion getrandomnumber*/
		
		let randomNumber = Math.random();  /*Esto generará que la variable randomNumber genere un número aleatorio*/
		
		randomNumber = randomNumber*valor_limite; /*Random number será igual a randomNumber(math.random()) x el valor límite*/
		
		randomNumber = Math.floor(randomNumber); 
		
		return randomNumber; /*Retorna randomnumber*/
	}

changeBgColor();

//Barra de Menu animado, al hacer click se activa el div con el id=Underline


var underline = document.querySelector('#underline'); /*Creamos la variable underline que va a afectar a el id underline*/

var item = document.querySelectorAll('nav a'); /*Creamos la variable item que selecciona todos los a que se encuentren en el nav*/


function indicador(e){ /*Función que recibe como parámetro el evento, modificamos el "estilo" de la variable underline 
tanto en left como el ancho, y le decimos que se desvíe unos píxeles*/

	underline.style.left = e.offsetLeft+"px";
	underline.style.width = e.offsetWidth+"px";
}

item.forEach(link =>{ /*Por cada item, es decir elemento que haya dentro de la variable item que hace
referencia a cada link del navegador se ejecutará lo siguiente. Cada vez que se haga click en el link
ocurre un evento que será lo que hemos declarado en la funcion anterior (indicador(e))*/

	link.addEventListener('click',(e)=>{
		indicador(e.target);
	})
});


//Cursor personalizado

const micursor = document.querySelector('.p_cursor'); //Llamamos al elemento html del cursor

/*Registramos los eventos del cursor que necesitamos*/
const addEventListeners = () => { 
	document.addEventListener("mousemove", onMouseMove); 
}
/*Cuando hagamos mousemove (es decir movamos
	el raton, se declare la constante onMouseMove)*/

/*Se encargará de posicionar nuestro cursor en el mismo lugar que el puntero del usuario*/
const onMouseMove = (e) => { /*Como parámetro: el evento, y de ahí obtenemos las coordenadas del puntero del 
	usuario en cada momento*/
	micursor.style.setProperty('--cursor-x', e.clientX + "px");
	micursor.style.setProperty('--cursor-y', e.clientY + "px");
}

addEventListeners();




