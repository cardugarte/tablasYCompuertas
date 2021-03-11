let clientBank = true;
let clientAccount = true;
let clientBalance = 1200000;
let destinationBank = true;
let destinationAccount = true;
let schedule = 16;
let transfer = 1000000;
let commission = 100;

if(clientBank && destinationBank) {
  if(clientAccount && destinationAccount) {
    if(schedule >= 9 && schedule <= 12 || schedule >= 15 && schedule <= 20) {
      if(transfer === 1000000) {
        if(clientBalance >= transfer) {
          clientBalance -= transfer;
          console.log(`La transferencia de ${transfer} se ha realizado exitosamente, su saldo actual es de ${clientBalance}`);
        }else {
          console.log('Fondos insuficientes para realizar la transferencia')
        }
      }else {
          console.log('El monto minimo a transferir es de $1000000 USD')
        }
      }else {
      console.log('Lo siento, estás fuera del rango de horario para realizar transferencias.');
    }
  }else if(clientAccount === false) {
    console.log('La cuenta del cliente es inválida.');
  }else {
    console.log('La cuenta del destinatario es inválida');
    }
}else {
  if(clientBalance >= (1000000 + commission)) {
    clientBalance -= transfer - commission;
    console.log(`La transferencia de ${transfer} a otro banco se ha realizado correctamente, la comisión fue de ${commission} USD y su saldo actual es de ${clientBalance}`)
  }else {
    console.log('Fondos insuficientes para realizar la tranferencia.')
    }
};