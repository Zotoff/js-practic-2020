// позволяет интегрировать старый интерфейс в новый интерфейс. Хорош для рефакторинга и перехода на новые версии классов

class OldCalc {
    operations(t1, t2, operation) {
        switch(operation) {
            case 'add':
                return t1 + t2;
            case 'substract':
                return t1 - t2;
            default:
                return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2){
        return t1 + t2
    }
    sub(t1, t2) {
        return t1 - t2
    }
}

class CalcAdapter {
    constructor(){
        this.calc = new NewCalc()
    }
    operations(t1, t2, operation) {
        switch(operation) {
            case 'add':
                return this.calc.add(t1, t2);
            case 'sub':
                return this.calc.sub(t1, t2);
            default:
                return NaN;
        }
    }
}

const oldCalcInstance = new OldCalc();
console.log(oldCalcInstance.operations(10, 5, 'add'));

const newCalcInstance = new NewCalc();
console.log(newCalcInstance.add(10, 6));

const adapterCaldInstance = new CalcAdapter();
console.log(adapterCaldInstance.operations(20, 5, 'sub'));