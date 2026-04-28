// FORMULÁRIO DE CONTATO
const formContato = document.getElementById('formContato');

if (formContato) {
  formContato.addEventListener('submit', function(e) {
    e.preventDefault();
// Pegar valores dos campos
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const assunto = document.getElementById('assunto').value;
const mensagem = document.getElementById('mensagem').value;


    // Validação simples
if (nome === '' || email === '' || assunto === '' || mensagem === '') {
  alert('Por favor, preencha todos os campos obrigatórios (*)');
  return;
}
// Validação de e-mail
const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  alert('Por favor, digite um e-mail válido');
  return;
}

// Simular envio
alert(`Mensagem enviada com sucesso!\n\nOlá
${nome}, entraremos em contato em breve.`);
// Limpar formulário
  formContato.reset();
});

// Máscara simples para telefone (opcional)
const telefoneInput = document.getElementById('telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
        } else if (value.length > 5) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1)$2-$3');
        } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        }
        e.target.value = value;
    });
  }
}
                             
