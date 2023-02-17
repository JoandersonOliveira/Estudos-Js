function constroiVagaEstacionamento() {
    return vagaEstacionamento = {
        _isOcupada: false,
        _vagaReservada: true,
        _nomeOcupador: 'nomeOcupador',
        _hrEntrada: 13.30,
        _hrSaida: 14.45,
        _modeloCarro: 'modeloCarro',
        _marcaCarro: 'marcaCarro',
        _telefones: [000000000, 0000000000, 000000000],

        liberarVaga() {
            this._isOcupada == false
        },
        ocuparVaga() {
            if (this._vagaReservada == true) {
                console.log('Vaga reservada')
            } else {
                this._isOcupada == true
            }
        },

        get nomeOcupador() {
            return this._nomeOcupador
        },

        set nomeOcupador(nome) {
            this._nomeOcupador = nome
        }

    }
}

const vagaEspecial = new constroiVagaEstacionamento()



