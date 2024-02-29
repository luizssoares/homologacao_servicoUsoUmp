intensTools = {
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
                    'title': 'CODCCUSTO',
                    'size': 'col-xs-9'
                    }
                ],
                renderContent: ['NOME', 'CODCCUSTO']
            }
        };
         
        var fil = FLUIGC.filter(inp, settings);//'#filter-example-array'
        return fil
    }, 
}
function a(){
    var dataset = DatasetFactory.getDataset("dsprojeto", null, null, null);
    return dataset.values
}
function inp_slc(){
    var divaAll = document.getElementById('projetov')
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codprojeto1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Projeto'

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
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    
    console.log("3")
    divaAll.appendChild(vselect)
    if(obju.state != 4){    
        var arrayOption = showDados()              
        //var voption = document.createElement('option')
        //att = document.createAttribute('value')
        document.getElementById('txt_codprojeto1').value = arrayOption[1]
        //voption.setAttributeNode(att)
        //voption.innerText = arrayOption[1]
        //vselect.appendChild(voption)

        att = document.createAttribute('disabled')
        att.value = true
        vselect.setAttributeNode(att)
    }else{
        var arrayOption =   a()  
        console.log(arrayOption)
        var xfil = intensTools.inpFilter('#txt_codprojeto1', arrayOption)
        //console.log(xfil.getSelectedItems())
        /*for(i = 0; i < arrayOption.length; i++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arrayOption[i].CODCCUSTO
            voption.setAttributeNode(att)
            voption.innerText = arrayOption[i].NOME
            vselect.appendChild(voption)
        }*/

    }
    insertINP(xfil)
}
var obju = {
    state: window.parentOBJ.ECM.workflowView.sequence
} 
function showDados(){
    var inpGet = []
    console.log(obju.state)
    if(obju.state != 0 || obju.state != 4 || obju.state != 122){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow = document.getElementById('codProjeto')

        if(inpNow.value != null || inpNow.value != ''){
            for(j = 0; j < arrdivs.length; j++){
                var dataset =   a()
                for(i = 0; i < dataset.length; i++){
                    var cod = dataset[i].CODCCUSTO
                    var codInp = inpNow.value
                    if(cod.indexOf(codInp) != -1 && cod.length == 5){
                        inpGet[0] = cod
                        inpGet[1] = dataset[i].NOME
                        console.log(cod)
                    }
                }
            }
        } 
    }
    return inpGet
}
window.addEventListener('load', inp_slc)

function abilitar(){
    if(obju.state == 122){
        document.getElementById("txt_codprojeto1").disabled = false
        //inp_slc()
    }
}
window.addEventListener('load', abilitar)