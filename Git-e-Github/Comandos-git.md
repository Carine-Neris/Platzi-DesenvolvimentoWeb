#Comando do git

- git init(inicializa o repositorio)

- git add (Adiciona os arquivos que serão versionados)
    * git add + nome dos aquivos que queremos versionar.

- git commit (Salva os arquivos que foram salvos pelo git add).
    * git commit -m + comentário.<br> 
    **obs**: o -m serve para adicionarmos o comentario no memento de salvar

- git log
    * Mostra todas as mudanças que fizemos.

- git status 
    * mostra quais arquivos foram alterados.

- git push
    * É ultilizado quando temos repositorio remeto; permite que o código commitado seja enviado para o repositorio remoto.Git Clone - Clona o repositorio remoto para o computador

- git fetch
    * baixas as mudanças do repositorio  remoto para o local 

- git merge
    * Junta as mudanças baixadas do repo remoto ao nosso diretório

- git pull 
    * É a junção do git fetch e git merge.

- git config --list
    * Listar todas as opções de configuração.

- git rm --cached
    * Remove o arquivo adicionado na stage area.<br>
    **obs**: a flag cached  diz que apenas queremos tirar o aquivo da stage area e não deletar do computador.

- git show 
    * Diferença entre o commit atual e o anterior.

- git diff [hash do primero commit] [hash do segundo commit]
    * Fazer comparações entre commits

 - git reset
    * Usado para voltar a um determinado commit<br>
    * Variações do comando são:<br>
    **git reset --soft + hash do commit**: Preserva os arquivos modificados mas remove do versionamento do git.<br>
    **git reset --hard + hash do commit**: Descarta os aquivos modificados do versinamento e do computador.

- git checkout + hash do commit
    * volta "No tempo" mas não descarta o histórico do git, não são realizadas modificações na linha de commits.
    * git checkout master volta para o commit "principal".

- git branch 
    * Criar uma ramificação, apartir do repositorio em que o comando foi rodado.

- git checkout [nome da branch]
    * Trocar de branch
    * **Git checkout -b [nome da branch]**: cria uma nova branch e muda de branch com um único comando.

- git remote add origin [url do repositorio remoto]
    * adicionar um repositorio remoto ao projeto.

- git remote -v 
    * listar quais repositorios remotos estão conectados ao projeto.


-------------------------------------------------------------

- O head é onde fica a versão mais atualizado do código. Onde está o último commit.

- Cada commit tem um hash único que identifica aquele commit.

-------------------------------------------------------------------------
## Gerar par Criptográfico

##### No terminal:<br>

    > ssh-keygen -t rsa -b + [quantidade de bits = 4096] -C "[e-mail do github]"

##### Criar o servidor que gerencia a cominicação ssh:<br>

    > eval "$(ssh-agent -s)"

##### Adicionar a Chave privada ao gente ssh

    > ssh-add [caminho da chave (ex: /.ssh/.id_rsa) ] 


## Enviar Chave para o Github

- Pegar a chave pública no computador.
- Acessar o settings no GitHub
- Ir para SSH and GPG keys
- Clicar em New SSH Key
- Cria titulo e colar a chave pública no campo key.

