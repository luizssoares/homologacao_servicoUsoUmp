intensTools1 = {
    inpFilter: function (inp, source) {
        var settings = {
            source: source,
            displayKey: 'NOME',
            multiSelect: false,
            style: {
                autocompleteTagClass: 'tag-gray',
                tableSelectedLineClass: 'info'
            },
            table: {
                header: [
                    {
                    'title': 'NOME',
                    'size': 'col-xs-9',
                    'dataorder': 'NOME',
                    'standard': true
                    },{
                    'title': 'CODIGO',
                    'size': 'col-xs-9'
                    }
                ],
                renderContent: ['NOME', 'CODIGO']
            }
        };
         
        var fil = FLUIGC.filter(inp, settings);//'#filter-example-array'
        return fil
    }, 
}
function idxInp(elem){
    console.log(elem)
    var dataset = DatasetFactory.getDataset("dsc_CentroCusto", null, null, null);
    inp_vlue = elem[0].CODCCUSTO
    console.log(inp_vlue)
    var arr = []
    for(i = 0; i < dataset.values.length; i++){
        var cd = dataset.values[i].CODIGO
        if(cd.indexOf(inp_vlue) != -1 && cd.length == 12){
            console.log(arr)
            //elemInner = {NOME: }
            arr.push(dataset.values[i])
        }    
    }
    divAll = document.getElementById('acaov')
    if(divAll.childNodes.length > 2){
        divAll.innerHTML = ''
    }
    slcArr(arr)
 //   insertINPun()
    document.getElementById('codProjeto').value = inp_vlue
}

function insertINP(xfil){
    inp = document.getElementsByTagName('input')
    console.log('dasd')
    for(i = 0; i < inp.length; i++){
        if(inp[i].id.indexOf('txt_codprojeto1') != -1){
            inp[i].onchange = function (){ idxInp(xfil.getSelectedItems());console.log(xfil.getSelectedItems()) }
        }
    }
}

function slcArr(arr, ind){
    var divaAll = document.getElementById('acaov')
    var idA = 'txt_codacao1'

    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Ação'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)
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
    divaAll.appendChild(vselect)
    if(obju.state != 4){    
        var arrayOption = showDados1()              
        //var voption = document.createElement('option')
        //att = document.createAttribute('value')
        document.getElementById('txt_codacao1').value = arrayOption[1]
        //voption.setAttributeNode(att)
        //voption.innerText = arrayOption[1]
        //vselect.appendChild(voption)

        att = document.createAttribute('disabled')
        att.value = true
        vselect.setAttributeNode(att)
    
    }else{   
        console.log(arr)
        var xfil1 = intensTools1.inpFilter('#txt_codacao1', arr)
        /*for(j = 0; j < arr.length; j++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arr[j].CODIGO
            voption.setAttributeNode(att)
            voption.innerText = arr[j].NOME
            vselect.appendChild(voption)
        }*/
    }
    insertINPun(xfil1)

}
function showDados1(){
    var inpGet1 = []
    if(obju.state != 0 || obju.state != 4 || obju.state != 122){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow = document.getElementById('codAcao')
        var inpAux = document.getElementById('codProjeto')

        if(inpNow.value != null || inpNow.value != ''){
            for(j = 0; j < arrdivs.length; j++){
                var dataset = DatasetFactory.getDataset("dsProjetoTT", null, null, null);
                var datasett =  dataset.values
                for(i = 0; i < datasett.length; i++){
                    var cod = datasett[i].CODIGO
                    var codInp = inpNow.value
                    if(cod.indexOf(codInp) != -1 && cod.length == 12){
                        inpGet1[0] = cod
                        inpGet1[1] = datasett[i].NOME
                        console.log(cod)
                    }
                }
            }
        } 
    }
    return inpGet1
}
window.addEventListener('load', slcArr)

