function displayFields(form, customHTML) {
        var Now_State = parseInt(getValue("WKNumState"));
        var NumProcesso = getValue("WKNumProces");
        var usuario = getValue("WKUser");
        var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        //document.getElementById("dat_Data_Presta").style = "background-color:#ea8989"
        console.log(Now_State);
        switch (Now_State) {

                //Solicitação
                case 0:
                        //form.setValue("hd_x",1);
                        form.setValue("cmb_NomeSolicita", usuario);
                        form.setValue("dt_DataSolicita", data.format(new Date()));
                        //form.setVisibleById("Aprovação_Superintendencia", false);
                        //form.setVisibleById("Aprovação_Demandante", false);
                        //form.setVisibleById("Numero_Process_Atual", false);
                        form.setVisibleById("cmb_GerenteSolicitante", true);
                        form.setVisibleById("txt_NumProcess", false);
                        form.setVisibleById("valorSelecionado", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setVisibleById("Panel_AtendUSN", false);

                        form.setEnabled("cmb_NomeSolicita", false);


                        var matricula = getValue("WKUser");
                        var f1 = new Array(matricula);

                        /*datasetsuperior = DatasetFactory.getDataset("dsSuperior", f1, null, null);
                        numerosuperior = datasetsuperior.getValue(0, "CHAPASUPERIOR");
                        nomesuperior = datasetsuperior.getValue(0, "NOMESUPERIOR");
                        descricao = datasetsuperior.getValue(0, "DESCRICAO");
                        nome = datasetsuperior.getValue(0, "NOME");
                        form.setValue("hd_nome", nome);
                        form.setValue("hd_numSuperior", numerosuperior);
                        form.setValue("cmb_GerenteSolicitante", nomesuperior);
                        form.setValue("zm_UnidadeSolicitante", descricao);

                        if (numerosuperior == "80000318") {
                                form.setValue("hd_numSuperior_super", numerosuperior);
                        }
                        else if (numerosuperior == "00000428") {
                                form.setValue("hd_numSuperior_super", "80000318");
                        }
                        else if (numerosuperior == "00000656") {
                                form.setValue("hd_numSuperior_super", numerosuperior);
                        } else {
                                var f2 = new Array(numerosuperior);

                                datasetsuperior_super = DatasetFactory.getDataset("dsSuperior", f2, null, null);
                                numerosuperior_super = datasetsuperior_super.getValue(0, "CHAPASUPERIOR");
                                nomesuperior_super = datasetsuperior_super.getValue(0, "NOMESUPERIOR");
                                form.setValue("hd_Super", nomesuperior_super);
                                if (numerosuperior_super == "00000428") {
                                        form.setValue("hd_numSuperior_super", "80000318");
                                } else {
                                        form.setValue("hd_numSuperior_super", numerosuperior_super);
                                }
                        }*/

                        break;

                //Compras


                case 63:


                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setVisibleById("Panel_AtendUSN", false);
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);


                        break;

                case 7:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);




                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);




                        break;

                //USN - Manutenção
                case 16:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);


                        break;


                //USN - Patrimônio
                case 18:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);

                        break;


                //USN - Limpeza
                case 21:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);


                        break;



                //USN - Logística
                case 23:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);

                        break;

                //USN - Telefonia
                case 24:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);

                        break;


                //USN - Combustível
                case 25:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);

                        break;


                //USN - Suporte a Contrats
                case 26:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);

                        break;


                //USN - Almoxarifado
                case 59:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);

                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setValue("cmb_Atendente", usuario);
                        form.setValue("dt_DataAtende", data.format(new Date()));
                        form.setEnabled("cmb_Atendente", false);
                        form.setEnabled("dt_DataAtende", false);
                        form.setEnabled("cmb_NomeSolicita", false);

                        break;


                //USN - Entrega e Avaliação da Solução
                case 9:
                        form.setValue("txt_NumProcess", NumProcesso);
                        //form.setValue("txt_NumProcess",Now_State);
                        //form.setVisibleById("div_PastaAzul",false);
                        //form.setVisibleById("valorSelecionado",false);
                        //form.setVisibleById("Aprovação_Superintendencia",false);
                        //form.setVisibleById("Aprovação_Demandante",false);
                        //form.setVisibleById("CodContratacao",false);
                        form.setVisibleById("txt_NumProcess", true);
                        form.setVisibleById("valorSelecionado", true);
                        form.setVisibleById("txt_Servico", false);
                        form.setVisibleById("ds_ServCatUSN", false);


                        form.setEnabled("txt_TipoServ", false);
                        form.setEnabled("ta_descricao", false);
                        form.setEnabled("txt_projeto", false);
                        form.setEnabled("txt_acao", false);
                        form.setEnabled("txt_recursos", false);
                        form.setEnabled("ta_atendUSN", false);

                        form.setVisibleById("Panel_Avaliacao", true);
                        form.setEnabled("cmb_NomeSolicita", false);


                        break;

                case 122:
                        form.setValue("cmb_NomeSolicita", usuario);
                        form.setVisibleById("cmb_GerenteSolicitante", true);
                        form.setVisibleById("valorSelecionado", false);
                        form.setValue("txt_NumProcess", NumProcesso);
                        form.setVisibleById("Panel_Avaliacao", false);
                        form.setVisibleById("Panel_AtendUSN", false);
                        form.setEnabled("cmb_NomeSolicita", false);

                case 123:
                        form.setValue("cmb_NomeSolicita", usuario);
                        form.setVisibleById("cmb_GerenteSolicitante",true);
                        form.setVisibleById("valorSelecionado",false);
                        form.setValue("txt_NumProcess",NumProcesso);
                        form.setVisibleById("Panel_Avaliacao",false);
                        form.setVisibleById("Panel_AtendUSN",false);
                        form.setEnabled("cmb_NomeSolicita", false);
                        
                default:
        }
}