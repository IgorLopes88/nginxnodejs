# FullCycle 3.0


Desafio **Nginx com Node.js** do Módulo **Docker** do curso **FullCycle**.

### Descrição do desafio
> Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A ideia principal é que quando um usuário acesse o *nginx*, o mesmo fará uma chamada em nossa aplicação *node.js*. Essa aplicação por sua vez adicionará um registro em nosso banco de dados *mysql*, cadastrando um nome na tabela `people`.
> O retorno da aplicação node.js para o nginx deverá ser:

~~~
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
~~~

### Instalação da Aplicação
Para instalar a aplicação, execute os seguintes comandos:
```
git clone https://github.com/IgorLopes88/nginxnodejs.git
```
```
cd nginxnodejs/src
```
```
npm install
```
```
cd ..
```


### Execução da Aplicação
Para executar a aplicação, na pasta raiz, execute o comando:
```
docker-compose up -d
```

### Acessando Aplicação
Após executar os comandos acima e caso não apresente nenhum erro, é importante aguardar alguns instantes até que a aplicação `nodejs` esteja *rodando*.
Através do console é possível ver a mensagem abaixo:
~~~
> node@1.0.0 start /app
> node server.js
Ativo na porta 3000
~~~
A aplicação estará disponível no endereço `http://localhost:8080`

Pronto!

<br/>
<br/>