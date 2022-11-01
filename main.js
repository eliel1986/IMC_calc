const calcular = document.getElementById('btn_calc');
const resetar = document.getElementById('clean');
calcular.addEventListener('click', imc);
resetar.addEventListener('click', reset);

function reset() {
	document.getElementById('result').style.backgroundColor = '';
}

function imc() {
	const nome = document.getElementById('insert_name').value;
	const altura = document.getElementById('insert_height').value;
	const peso = document.getElementById('insert_weight').value;

	if (nome !== '' && altura !== '' && peso !== '') { //validação do preenchimento
		const valorIMC = (peso / (altura * altura)).toFixed(1); //cálculo IMC
		let classificacao;
		if (valorIMC < 18.5) {
			classificacao = 'abaixo do peso.';
			document.getElementById('result').style.backgroundColor = '#b7d5ac';
		} else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
			classificacao = 'com peso ideal, parabéns!';
			document.getElementById('result').style.backgroundColor = '#b7d5ac';
		} else if (valorIMC >= 25 && valorIMC <= 29.9) {
			classificacao = 'com sobrepeso.';
			document.getElementById('result').style.backgroundColor = '#fbec5d';
		} else if (valorIMC >= 30 && valorIMC <= 34.9) {
			classificacao = 'com obesidade grau I.';
			document.getElementById('result').style.backgroundColor = 'red';
		} else if (valorIMC >= 35 && valorIMC <= 39.9) {
			classificacao = 'com obesidade grau II.';
			document.getElementById('result').style.backgroundColor = 'red';
		} else {
			classificacao = 'com obesidade grau III ou Mórbida.';
			document.getElementById('result').style.backgroundColor = 'red';
			// document.getElementById('result').style.color = '#ffffff';
			
		}

		document.getElementById('result').value = `Olá ${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
	}
	else {
		document.getElementById('result').value = 'Preencha todos os dados!!!';
	}
}

