# Recuperação de senha

**Requisitos Funcionais - RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos não Funcionais - RNF**

- Utilizar Mailtrp para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negócio - RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**Requisitos Funcionais - RF**

- O usuário deve poder atualizar seu nome, email e senha;

**Regras de Negócio - RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;


# Painel do prestador

**Requisitos Funcionais - RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos não Funcionais - RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**Regras de Negócio - RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar


# Agendamento de serviços

**Requisitos Funcionais - RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos não Funcionais - RNF**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de Negócio - RN**

- Cadaagendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que ja passou;
- O usuário não pode agendar serviços com ele mesmo;

# Common Errors

- Error 401 when connected to front-end or mobile.
	- It can be JWT authentication that has expired => just log out and authenticate again
