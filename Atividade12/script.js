{
    // --- 1. FUNÇÃO CONSTRUTORA RETÂNGULO ---
    function Retangulo(x, y) {
        this.base = x;
        this.altura = y;
        this.calcularArea = function() {
            return this.base * this.altura;
        };
    }

    const btnArea = document.getElementById('btnArea');
    btnArea.addEventListener('click', () => {
        const x = Number(document.getElementById('base').value);
        const y = Number(document.getElementById('altura').value);
        
        const meuRetangulo = new Retangulo(x, y);
        const display = document.getElementById('res_retangulo');
        display.style.display = 'block';
        display.innerText = `Área calculada: ${meuRetangulo.calcularArea()}m²`;
    });


    // --- 2. CLASSES CONTA, CORRENTE E POUPANÇA ---
    class Conta {
        constructor(correntista, banco, numero, saldo) {
            this._correntista = correntista;
            this._banco = banco;
            this._numero = numero;
            this._saldo = saldo;
        }

        // Getters e Setters base
        get correntista() { return this._correntista; }
        set correntista(valor) { this._correntista = valor; }
        get saldo() { return this._saldo; }
        set saldo(valor) { this._saldo = valor; }
    }

    class Corrente extends Conta {
        constructor(correntista, banco, numero, saldo, especial) {
            super(correntista, banco, numero, saldo);
            this._especial = especial;
        }
        get especial() { return this._especial; }
        set especial(valor) { this._especial = valor; }
    }

    class Poupanca extends Conta {
        constructor(correntista, banco, numero, saldo, juros, vencimento) {
            super(correntista, banco, numero, saldo);
            this._juros = juros;
            this._vencimento = vencimento;
        }
        get juros() { return this._juros; }
        set juros(valor) { this._juros = valor; }
        get vencimento() { return this._vencimento; }
        set vencimento(valor) { this._vencimento = valor; }
    }

    // Lógica dos botões do banco
    const btnCorrente = document.getElementById('btnCorrente');
    const btnPoupanca = document.getElementById('btnPoupanca');
    const resBanco = document.getElementById('res_banco');

    function pegarDadosBase() {
        return [
            document.getElementById('nome').value,
            document.getElementById('banco').value,
            document.getElementById('conta').value,
            Number(document.getElementById('saldo').value)
        ];
    }

    btnCorrente.addEventListener('click', () => {
        const [nome, banco, num, saldo] = pegarDadosBase();
        const cc = new Corrente(nome, banco, num, saldo, 500); // 500 de limite especial fixo
        
        resBanco.style.display = 'block';
        resBanco.innerText = `CONTA CORRENTE CRIADA:
        Titular: ${cc.correntista}
        Banco: ${banco} | Conta: ${num}
        Saldo: R$ ${cc.saldo.toFixed(2)}
        Limite Especial: R$ ${cc.especial.toFixed(2)}`;
    });

    btnPoupanca.addEventListener('click', () => {
        const [nome, banco, num, saldo] = pegarDadosBase();
        const cp = new Poupanca(nome, banco, num, saldo, 0.05, "10/12/2026");
        
        resBanco.style.display = 'block';
        resBanco.innerText = `CONTA POUPANÇA CRIADA:
        Titular: ${cp.correntista}
        Banco: ${banco} | Conta: ${num}
        Saldo: R$ ${cp.saldo.toFixed(2)}
        Juros Mensal: ${(cp.juros * 100)}%
        Vencimento: ${cp.vencimento}`;
    });
}