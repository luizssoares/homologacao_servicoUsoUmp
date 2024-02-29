function idxInpUn(elem){
    var dataset = DatasetFactory.getDataset("dsProjetoTT", null, null, null);
    inp_vlue = elem[0].CODIGO
    console.log(inp_vlue)
    var arr = []
    for(i = 0; i < dataset.values.length; i++){
        var cd = dataset.values[i].CODIGO
        if(cd.indexOf(inp_vlue) != -1 && cd.length == 16){
            console.log(arr)
            arr.push(dataset.values[i])
        }    
    }
    divAll = document.getElementById('unidadev')
    if(divAll.childNodes.length > 2){
        divAll.innerHTML = ''
    }
    slcArrUn(arr)
    document.getElementById('codAcao').value = inp_vlue
}

function insertINPun(xfil1){
    inp = document.getElementsByTagName('input')
    console.log(inp)
    for(i = 0; i < inp.length; i++){
        if(inp[i].id.indexOf('txt_codacao1') != -1){
            inp[i].onchange = function (){ idxInpUn(xfil1.getSelectedItems()) }
        }
    }
}

function slcArrUn(arr){ 
    var divaAll = document.getElementById('unidadev') 
    var idA = 'txt_codunidade1'
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codunidade1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Unidade'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    /*****************select******************** */
    var vselect = document.createElement('input')
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = idA
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = idA
    vselect.setAttributeNode(att)

    console.log("3")
    var inptest = document.getElementById('codRecurso')
    if(obju.state != 4 && inptest.value == '' || inptest.value == null){    
        document.getElementById('unin').style.display = 'block'
    }else if(obju.state != 4){
        divaAll.appendChild(vlabel)  
        divaAll.appendChild(vselect)
        var arrayOption = showDados2()              
        //var voption = document.createElement('option')
        //att = document.createAttribute('value')
        document.getElementById('txt_codunidade1').value = arrayOption[1]
        //voption.setAttributeNode(att)
        //voption.innerText = arrayOption[1]
        //vselect.appendChild(voption)

        att = document.createAttribute('disabled')
        att.value = true
        vselect.setAttributeNode(att)

        //divaAll.appendChild(vselect)
    }else{ 
        divaAll.appendChild(vlabel)  
     /*   for(j = 0; j < arr.length; j++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arr[j].CODIGO
            voption.setAttributeNode(att)
            voption.innerText = arr[j].NOME
            vselect.appendChild(voption)
        }*/
        divaAll.appendChild(vselect)
        var xfil2 = intensTools1.inpFilter('#txt_codunidade1', arr)

        //if(inptest.value == '' || inptest.value == null){
            //document.getElementById('codRecurso').value = inp[0].CODIGO
        //}
        document.getElementById('txt_codunidade1').onchange = function (){ 
            inp = xfil2.getSelectedItems()
            document.getElementById('codRecurso').value = inp[0].CODIGO 
            
        }
    
    }
}
function showDados2(){
    var inpGet2 = []
    if(obju.state != 0 || obju.state != 4){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow1 = document.getElementById('codRecurso')
        var inpAux = document.getElementById('codProjeto')

        if(inpNow1.value != null || inpNow1.value != ''){
            for(j = 0; j < arrdivs.length; j++){
                var dataset1 = DatasetFactory.getDataset("dsProjetoTT", null, null, null);
                var datasett1 =  dataset1.values
                for(i = 0; i < datasett1.length; i++){
                    var cod = datasett1[i].CODIGO
                    var codInp1 = inpNow1.value
                    if(cod.indexOf(codInp1) != -1 && cod.length == 16){
                        inpGet2[0] = cod
                        inpGet2[1] = datasett1[i].NOME
                        console.log(cod)
                    }
                }
            }
        } 
    }
    return inpGet2
}
window.addEventListener('load', slcArrUn)

