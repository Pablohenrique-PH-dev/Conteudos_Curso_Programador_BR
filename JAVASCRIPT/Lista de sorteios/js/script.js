class Produto {
    

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.imgEdit = null;

    }

    


    salvar() {
        let Participante = this.lerDados();

        if (this.validaCampos(Participante)) {
            if (this.editId == null) {
                this.adicionar(Participante);
            } else
                this.atualizar(this.editId, Participante);
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_Participante = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_Igreja = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_Participante.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].Numero_de_Telefone;
            td_Igreja.innerText = this.arrayProdutos[i].Igreja;

            td_id.classList.add('center')

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';
            imgEdit.setAttribute("onclick", "Participante.preparaEdicao(" + JSON.stringify(this.arrayProdutos[i]) + ")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onclick", "Participante.deletar(" + this.arrayProdutos[i].id + ")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);


        }
    }

    adicionar(Participante) {
        Participante.Numero_de_Telefone = parseFloat(Participante.Numero_de_Telefone)
        this.arrayProdutos.push(Participante);
        this.id++;
    }

    atualizar(id, Participante) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = Participante.nomeProduto;
                this.arrayProdutos[i].Numero_de_Telefone = Participante.Numero_de_Telefone;
                this.arrayProdutos[i].Igreja = Participante.Igreja;
            }
        }
    }

    preparaEdicao(dados) {
        this.editId = dados.id;

        document.getElementById('Participante').value = dados.nomeProduto;
        document.getElementById('Numero_de_Telefone').value = dados.Numero_de_Telefone;
        document.getElementById('Igreja').value = dados.Igreja;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    lerDados() {
        let Participante = {}

        Participante.id = this.id;
        Participante.nomeProduto = document.getElementById('Participante').value;
        Participante.Numero_de_Telefone = document.getElementById('Numero_de_Telefone').value;
        Participante.Igreja = document.getElementById('Igreja').value;

        return Participante;
    }

    

    validaCampos(Participante) {
        let msg = '';

        if (Participante.nomeProduto == '') {
            msg += '- Informe o Nome do Produto \n';
        }

        if (Participante.Numero_de_Telefone == '') {
            msg += '- Informe o Numero de Telefone do Participante \n';
        }

        if (Participante.Igreja == '') {
            msg += '- Informe a Igreja do Participante \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }

        return true
    }

    cancelar() {
        document.getElementById('Participante').value = '';
        document.getElementById('Numero_de_Telefone').value = '';
        document.getElementById('Igreja').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;

    }

    deletar(id) {

        if (confirm('Deseja realmente deletar o produto do ID' + id)) {

            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }


}

var Participante = new Produto();

