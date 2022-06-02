// new Error(message, fileName, lineNumber);

const MyError = new Error('Mensagem Inválida!');
throw MyError;


const MyError1 = new Error('Mensagem Inválida!');
MyError1.name = 'InvalidMessage';
throw MyError1;