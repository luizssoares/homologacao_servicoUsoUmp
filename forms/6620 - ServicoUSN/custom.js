function aprovGer(){
    document.getElementById('gerencia').style.display = 'none'
    document.getElementById('txt_TipoServ').addEventListener('change', function () {
        var tipo = this.value
        if(tipo == 'Almoxarifado' || tipo == 'Compras' || tipo == 'Patrimônio'){
            document.getElementById('gerencia').style.display = 'block'
        }else{ document.getElementById('gerencia').style.display = 'none' }
    }) 
}
window.addEventListener('load', aprovGer)

function setSuper(){
    document.getElementById("cmb_GerenteSolicitante").onchange = function () { getSuper() }
}
function getSuper(){
    var hdn_Super   = document.getElementById("numSuperior")
    console.log(DatasetFactory.getDataset("dsc_Unidades", null, null, null))
    setTimeout(hdn_Super.value = document.getElementById("cmb_GerenteSolicitante").value, 6000);
    var dataset     = DatasetFactory.getDataset("dsc_Unidades", null, null, null)
    for(i = 0; i < dataset.values.length; i++){
        var mat     = dataset.values[i].Matricula
        if(mat == hdn_Super.value){
            var un  = dataset.values[i].NomeUnidade
            document.getElementById("zm_UnidadeSolicitante").value = un
        }
    }
} 
window.addEventListener("load", setSuper)


var moeda = {
	desformatar: function (num) {															//*Desformata valores com a formatação da função instanciada na 'var moeda'
		num = num.replace(/\./g, "");
		num = num.replace(/\,/g, ".");
		return parseFloat(num);
	},
	formatar: function (num) {																//*Formata os valores
		x = 0;
		if (num < 0) {
			num 	= Math.abs(num);
			x 		= 1;
		}
		if (isNaN(num)) num = "0";
		
		cents 	= Math.floor((num * 100 + 0.5) % 100);
		num 	= Math.floor((num * 100 + 0.5) / 100).toString();
		
		if (cents < 10) cents = "0" + cents;
		
		for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++){
			num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
		}

		ret = num + ',' + cents;
		if (x == 1) ret = ' – ' + ret;
		return ret;
	},
	arredondar: function (num) {															//*Valores com centavos de 4 digitos transformados em 2 digitos
		return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);							
	}
}

function formataCasasDecimais(valor) {
	valor = "" + valor;

	if (valor.lastIndexOf(".") == -1) {
		valor = valor + ".00";
	}
	else {
		var casasDecimais = valor.substring(valor.lastIndexOf(".") + 1, valor.length);
		if (casasDecimais.length > 2)
			casasDecimais = casasDecimais.substring(0, 2);
		else {
			while (casasDecimais.length < 2) {
				casasDecimais = casasDecimais + "0";
			}
		}
		valor = valor.substring(0, valor.lastIndexOf(".") + 1) + casasDecimais;
	}

	return valor;
}



function setSelectedZoomItem(selectedItem) 
{
    
    //ok
    if(selectedItem.inputId == "txt_projeto")
    {
        $('#codProjeto').val(selectedItem.CODCCUSTO);
        atualizaZoomFilterAcao(selectedItem.CODCCUSTO);
    }

    //ok
    if(selectedItem.inputId == "txt_acao")
    {
        $('#codAcao').val(selectedItem.CODACAO);
        var codProjeto = $('#codProjeto').val();
        atualizaZoomFilterRecursos(codProjeto, selectedItem.CODACAO);
        
        buscaSaldo(document.getElementById("codProjeto"),document.getElementById("codAcao"))

    }
    
}

function removedZoomItem(removedItem) 
{
    if(removedItem.inputId.startsWith('txt_projeto'))
    {
        $("#txt_acao").val();
        $("#txt_recursos").val();
        
        $("#codProjeto").val();
        $("#codAcao").val();
        $("#codRecurso").val();
    }
}   

function atualizaZoomFilterAcao(codProjeto)
{
    reloadZoomFilterValues("txt_acao", "txt_projeto,"+codProjeto);
}

function atualizaZoomFilterRecursos(codProjeto, codAcao)
{
    reloadZoomFilterValues("txt_recursos", "txt_projeto,"+codProjeto+",txt_acao,"+codAcao);
}


function buscaSaldo(projeto,acao){
        
        var campo = acao;
        
        if(campo.value != ""){ 
            var cc1 = new Array(projeto.value+"."+acao.value);
            datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);
            if (datasetsaldo.values.length > 0){    
                var record = datasetsaldo.values[0];
                saldo = eval("record[\"SALDO\"]");
            }
            saldo = formataCasasDecimais(saldo)
            saldo = moeda.formatar(saldo)
            
            if(saldo == 0 || saldo == "0,00"){
                document.getElementById("txt_saldo").value = saldo;
                document.getElementById("txt_saldo").style = "background-color:#ea8989";
            } 
            else if(saldo != 0 || saldo != "0,00") {
                document.getElementById("txt_saldo").value = saldo;
                document.getElementById("txt_saldo").style = "background-color:#86dc9c";
            }
        }
    }