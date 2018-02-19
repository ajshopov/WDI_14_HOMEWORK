class ATM {
  constructor(){
    this.type = 'checking';
    this.money = 0;
    this.transactionHistory = [];
  }

  withdraw(amount){
    this.money -= amount
    this.transactionHistory.push(`withdraw ${amount}`)
  }

  deposit(amount){
    this.money += amount
    this.transactionHistory.push(`deposit ${amount}`)
  }

  showBalance(){
    return this.money
  }

  showTransHistory(){
    return this.transactionHistory.join('\n')
  }
}

let me = new ATM;
me.deposit(100);
me.withdraw(50);
me.deposit(400);
console.log(me.showBalance());
console.log(me.showTransHistory());