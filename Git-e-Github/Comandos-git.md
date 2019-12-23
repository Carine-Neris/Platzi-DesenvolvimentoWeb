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
    * É ultilizado quando temos repositorio remeto; permite que o código commitado seja enviado para o repositorio remoto.

- git config --list
    * Listar todas as opções de configuração.

- git rm --cached
    * Remove o arquivo adicionado na stage area.<br>
    **obs**: a flag cached  diz que apenas queremos tirar o aquivo da stage area e não deletar do computador.

- git show 
    * Diferença entre o commit atual e o anterior.

- git diff [hash do primero commit] [hash do segundo commit]
    * Fazer comparações entre commits
 
-------------------------------------------------------------

- O head é onde fica a versão mais atualizado do código. Onde está o último commit.

- Cada commit tem um hash único que identifica aquele commit.

