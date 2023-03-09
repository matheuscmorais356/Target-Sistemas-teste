// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const data = require("./dados.json");


class CalculateBilling {
    constructor() {
        this.lowerValue = 0;
        this.highestValue = 0;
        this.highestBillingDays = 0;
        this.billingList = [];

        data.forEach((dayInformation) => {
            if (dayInformation.valor > 0) {
                this.billingList.push(dayInformation.valor);
            }
        });
    };

    lowestBillingAmount() {
        return Math.min(...this.billingList);
    };

    highesBillingAmount() {
        return Math.max(...this.billingList);
    };

    calculateAverageBilling() {
        let totalBilling = 0;

        for (let i = 0; i < this.billingList.length; i++) {
            totalBilling += this.billingList[i];
        }

        return totalBilling / this.billingList.length;
    };

    calculateHighestBillingDays() {
        let billingAverage = this.calculateAverageBilling();


        data.forEach((dayInformation) => {
            if (dayInformation.valor > billingAverage) {
                this.highestBillingDays ++
            }
        });

        return this.highestBillingDays;
    };
};

const t = new CalculateBilling();

console.log(`Menor faturamento do mês: R$ ${t.lowestBillingAmount()}`);
console.log(`Maior faturamento do mês: R$ ${t.highesBillingAmount()}`);
console.log(`Quantidade de dias que o faturamento foi maior do que a média: ${t.calculateHighestBillingDays()}`);