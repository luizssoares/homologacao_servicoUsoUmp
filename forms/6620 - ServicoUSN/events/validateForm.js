function validateForm(form) {

    var Estado_Atual = parseInt(getValue("WKNumState"));

    String.prototype.isEmpty = function () {
        return (!this || 0 === this.length);
    };

    var errorMsg = "";
    var endofline = "</br>";

    //Abertura
    if (Estado_Atual == 0 || Estado_Atual == 4) {

        if (form.getValue('valorSelecionado') == null || form.getValue('valorSelecionado') == "") {
            errorMsg += "Selecione o Serviço Desejado. " + endofline;
        }

        if (form.getValue('ta_descricao') == null || form.getValue('ta_descricao').trim().isEmpty() == true) {
            errorMsg += "Descreva o Serviço Solicitado. " + endofline;
        }


        if (form.getValue('txt_TipoServ') == "Compras") {
            if (form.getValue('codProjeto') == null || form.getValue('codProjeto') == "") {
                errorMsg += "Informe o nome do Projeto. " + endofline;
            }

            if (form.getValue('codAcao') == null || form.getValue('codAcao') == "") {
                errorMsg += "Informe o nome da Ação. " + endofline;
            }

            if (form.getValue('codRecurso') == null || form.getValue('codRecurso') == "") {
                errorMsg += "Informe o nome da Unidade. " + endofline;
            }
        }


        // aprovGer()

    }

    if (Estado_Atual == 9) {

        if (form.getValue('slc_Avalia') == null || form.getValue('slc_Avalia') == "" || form.getValue('slc_Avalia').trim().isEmpty() == true) {
            errorMsg += "Classifique o Atendimento" + endofline;
        }


    }


    if (Estado_Atual == 7 || Estado_Atual == 16 || Estado_Atual == 18 || Estado_Atual == 21 || Estado_Atual == 23 || Estado_Atual == 24 || Estado_Atual == 25 || Estado_Atual == 26) {

        if (form.getValue('ta_atendUSN') == null || form.getValue('ta_atendUSN') == "") {
            errorMsg += "Descreva o resumo do atendimento" + endofline;
        }

    }

    function aprovGer() {
        var ger = form.getValue('cmb_GerenteSolicitante')
        var uni = form.getValue('zm_UnidadeSolicitante')
        var proj = form.getValue('txt_projeto')
        var acao = form.getValue('txt_acao')
        var unid = form.getValue('txt_recursos')
        var sald = form.getValue('txt_saldo')

        fields = [ger, uni, proj, acao, unid]
        names = ["Superior para Aprovação", "Unidade Solicitante", "Projeto", "Ação", "Unidade"]

        var tipo = form.getValue('txt_TipoServ')
        if (tipo == 'Almoxarifado' || tipo == 'Compras' || tipo == 'Patrimônio') {
            for (var i = 0; i < fields.length; i++) {
                if (fields[i] == null || fields[i] == '' || fields[i] == "Selecione" || fields[i] == "0,00"
                    || fields[i] == "0") {
                    errorMsg += "Favor preencher campo " + "<b>" + names[i] + "</b>" + endofline;
                }
            }
            if (sald == null || sald == '' || sald == "Selecione" || sald == "0,00"
                || sald == "0") {
                errorMsg += "Não existe <b>saldo</b> no <b>centro de custo</b>." + endofline;
            }
        }

    }



    if (errorMsg.trim().isEmpty() == false) throw "\n" + errorMsg;
}