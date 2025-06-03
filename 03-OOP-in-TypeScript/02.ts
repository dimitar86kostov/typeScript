// Create a class BankAccount with a private property balance (number). Add methods:

// · deposit(amount: number): void

// · withdraw(amount: number): void

// · getBalance(): number

// Ensure that withdrawing more than the balance is not allowed.
class BankAccount {

    private balance: number

    constructor(balance: number) {
        this.balance = balance
    }

    public deposit(amount: number): void {
        this.balance += amount
    };

    public withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
    };

    public getBalance(): number {
       return this.balance;
        
    }

}

const account = new BankAccount(100);

account.deposit(50);

account.withdraw(30);

console.log(account.getBalance());

// const account = new BankAccount(20);

// account.withdraw(30);

// console.log(account.getBalance());