create database db_cdf;
use db_cdf;
create table tb_instituicao(
	id_instituicao int primary key auto_increment,
	nm_instituicao varchar(255)
);
create table tb_usuario(
	id_usuario int primary key auto_increment,
	id_instituicao int not null,
    nm_usuario varchar(20),
    ds_senha varchar(64),
    ds_role varchar(30),
    foreign key (id_instituicao) references tb_instituicao(id_instituicao)
);

create table tb_conta(
	id_conta int primary key auto_increment,
    nm_conta varchar(100),
    bt_cnpj boolean,
    bt_cc boolean
);

create table tb_conta_acesso(
	id_conta_acesso int primary key auto_increment,
    id_conta int not null,
    id_instituicao int not null,
    bt_proprietario boolean,
    foreign key (id_conta) references tb_conta(id_conta),
    foreign key (id_instituicao) references tb_instituicao(id_instituicao)
);

create table tb_transferencia(
	id_transferencia int primary key auto_increment,
    dt_referencia date,
    vl_transferencia decimal (15,2),
    dt_transferencia datetime,
    ds_observacao varchar (200),
    file_recibo varchar(170),
    id_conta_origem int not null,
    id_conta_destino int not null,
    foreign key (id_conta_origem) references tb_conta(id_conta),
    foreign key (id_conta_destino) references tb_conta(id_conta)
);

create table tb_receita(
	id_receita int primary key auto_increment,
    dt_referencia date,
	ds_tipo varchar (200),
    vl_receita decimal (15,2),
    dt_receita varchar(100),
    ds_observacao varchar (200),
    id_conta int not null,
    foreign key (id_conta) references tb_conta(id_conta)
);	

create table tb_despesas(
	id_despesas int primary key auto_increment,
    dt_referencia date,
    ds_tipo varchar (200),
    vl_despesas decimal(15,2),
    nr_parcelas int,
    dt_despesas date,
    ds_observacao varchar (200),
    file_recibo varchar(170) ,
    id_conta_origem int not null,
    id_conta_destino int not null,
    foreign key (id_conta_origem) references tb_conta(id_conta),
    foreign key (id_conta_destino) references tb_conta(id_conta)
);
