// prototipos
console.log('Prototipos');

function PessoaP(nome, tipo) {
  this.nome = nome;
  this.tipo = tipo;
  this.apresentarse = function () {
    console.log(`Olá, meu nome é ${this.nome} e sou ${this.tipo} e possuo o documento ${this.tipo === 'Pessoa Física' ? this.cpf : this.cnpj}`);
  }
}

function PessoaFisicaP(nome, tipo, cpf) {
  PessoaP.call(this, nome, tipo);
  this.cpf = cpf;
}

function PessoaJuridicaP(nome, tipo, cnpj) {
  PessoaP.call(this, nome, tipo);
  this.cnpj = cnpj;
}

let pessoa1 = new PessoaFisicaP('Marimbondo', 'Pessoa Física', '123.456.789-00');
let pessoa2 = new PessoaJuridicaP('MachaDam', 'Pessoa Jurídica', '12.345.678/0001-00');

pessoa1.apresentarse();
pessoa2.apresentarse();

// herança
console.log('Herança');

class PessoaH {
  _nome;
  _tipo;

  constructor(nome, tipo) {
    this._nome = nome;
    this._tipo = tipo;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e sou ${this.tipo} e possuo o documento ${this.tipo === 'Pessoa Física' ? this.cpf : this.cnpj}`);
  }

  get nome() {
    return this._nome;
  }

  get tipo() {
    return this._tipo;
  }
}

class PessoaFisicaH extends PessoaH {
  _cpf;

  constructor(nome, tipo, cpf) {
    super(nome, tipo);
    this._cpf = cpf;
  }

  get cpf() {
    return this._cpf;
  }
}

class PessoaJuridicaH extends PessoaH {
  _cnpj;

  constructor(nome, tipo, cnpj) {
    super(nome, tipo);
    this._cnpj = cnpj;
  }

  get cnpj() {
    return this._cnpj;
  }
}

let pessoa3 = new PessoaFisicaH('Marimbondo', 'Pessoa Física', '123.456.789-00');
let pessoa4 = new PessoaJuridicaH('MachaDam', 'Pessoa Jurídica', '12.345.678/0001-00');

pessoa3.apresentar();
pessoa4.apresentar();

