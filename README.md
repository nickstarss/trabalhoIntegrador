<h1>Projeto Smart City</h1>
<div>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=DESENVOLVIDO&color=8A2BE2&style=for-the-badge" />
  <img src="http://img.shields.io/static/v1?label=LANCAMENTO&message=JUNHO&color=8A2BE2&style=for-the-badge" />
</div>

<h4>:construction:  O projeto a seguir ainda vai passar por mudanças futuras   :construction:</h4>

<h2>📕 Descrição do projeto</h2>
<p>
  O projeto Smart City foi projetado para a instituição <a href="https://sp.senai.br/unidade/campinas/">SENAI "Roberto Mange"</a> como projeto integrador do segundo semestre de Desenvolvimento de Sistemas. Ele tem como proposta
  um site que mostre as informações de sensores que foram implementados dentro da instituição, que captam informações de temperatura, umidade, entre outros, e os armazenam em um banco de dados. As informações são então capturadas e mostradas
  em uma interface amigavel para o usuário.
</p>
<img src=https://github.com/nickstarss/trabalhoIntegrador/assets/143576369/1b0ca510-f390-43a6-9e4a-e02511b6aa91"/>

<h2>:hammer: Funcionalidades do projeto </h2>

- `Funcionalidade 1`: Ver informações de sensores cadastrados
- `Funcionalidade 2`: Cadastrar novos sensores
- `Funcionalidade 2`: Alterar informações de sensores já cadastrados
- `Funcionalidade 3`: Aplicar filtros para visualização de sensores especificos
- `Funcionalidade 4`: Mapa com localização dos sensores, incluindo informações sobre os mesmos

<h2> 📁 Acesso ao projeto </h2>

<p>Você pode <a href="https://github.com/nickstarss/trabalhoIntegrador">acessar o código fonte do projeto </a> ou <a href="https://github.com/nickstarss/trabalhoIntegrador.zip">baixá-lo</a>.</p>

<h2> 🛠️ Abrir o projeto </h2>

Após baixar o projeto, você pode abrir com o Visual Studio Code. Para fazer isso, na tela inicial clique em:
- **File**
- **Open Folder...**
- Procure o local do projeto baixado (caso ele esteja em formato zip, será necessário extrair antes de continuar)
- **Selecionar Pasta**

<h2>⚙️ Rodar o projeto</h2>

Será necessário rodar duas partes do projeto para seu funcionamento correto, começando com o **Backend**:
- Na parte superior, clique em **Terminal**
- **New Terminal**
- `cd back`
- `cd smart_city`
- `python -m venv env` (em alguns casos o comando pode mudar de **python** para **py**)
- `env\scripts\activate`
- `pip install -r requirements.txt`
- `py manage.py runserver`

Agora que estamos com o servidor backend rodando, podemos rodar o front, para isso siga estes passos:
- Na parte direita da tela, clique no **mais**
- `cd front`
- `npm install`
- `npm run dev`

Após isso, você pode copiar o link para acessar o site dentro do terminal, indicado na frente do **Local**.

<h2>✔️ Tecnologias</h2>

Algumas das tecnologias incluidas no projeto são:
- `Python`
- `Javascript`
- `Django`
- `React`
- `SQL`

  

