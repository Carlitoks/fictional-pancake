// Calculator

var calculator = {
    answer: "",
    operation: "",
    evaluation: "",
    history: ['','','','',''],

    evaluate: function() {
        try {
            math.eval(this.operation);
            this.evaluation = math.eval(this.operation);
            this.history.push(this.evaluation);
            this.history.shift();
            
            this.operation = "";
            return true;
        } catch (e) {
            if (e instanceof SyntaxError) { 
                this.evaluation = "E";
                return false;
            }
            else {
                this.evaluation = "UE";
                return false;
            }
        }
    }
}

// default display values
$('#display1').val("");
$('#display2').val("");

// Digits
$('#zero').on('click', function () {
    calculator.operation = calculator.operation + "0";
    $('#display1').val($('#display1').val() + '\u0030');
})


$('#one').on('click', function () {
    calculator.operation = calculator.operation + "1";
    $('#display1').val($('#display1').val() + '\u0031');
})

$('#two').on('click', function () {
    calculator.operation = calculator.operation + "2";
    $('#display1').val($('#display1').val() + '\u0032');
})

$('#three').on('click', function () {
    calculator.operation = calculator.operation + "3";
    $('#display1').val($('#display1').val() + '\u0033');
})

$('#four').on('click', function () {
    calculator.operation = calculator.operation + "4";
    $('#display1').val($('#display1').val() + '\u0034');
})

$('#five').on('click', function () {
    calculator.operation = calculator.operation + "5";
    $('#display1').val($('#display1').val() + '\u0035');
})

$('#six').on('click', function () {
    calculator.operation = calculator.operation + "6";
    $('#display1').val($('#display1').val() + '\u0036');
})

$('#seven').on('click', function () {
    calculator.operation = calculator.operation + "7";
    $('#display1').val($('#display1').val() + '\u0037');
})

$('#eight').on('click', function () {
    calculator.operation = calculator.operation + "8";
    $('#display1').val($('#display1').val() + '\u0038');
})

$('#nine').on('click', function () {
    calculator.operation = calculator.operation + "9";
    $('#display1').val($('#display1').val() + '\u0039');
})
              
$('#decimal').on('click', function () {
    calculator.operation = calculator.operation + ".";
    $('#display1').val($('#display1').val() + '\u002e');
})

// Operators
$('#add').on('click', function () {
    calculator.operation = calculator.operation + "+";
    $('#display1').val($('#display1').val() + '\u002b');
})

$('#subtract').on('click', function () {
    calculator.operation = calculator.operation + "-";
    $('#display1').val($('#display1').val() + '\u2212');
})

$('#multiply').on('click', function () {
    calculator.operation = calculator.operation + "*";
    $('#display1').val($('#display1').val() + '\u00d7');
})

$('#divide').on('click', function () {
    calculator.operation = calculator.operation + "/";
    $('#display1').val($('#display1').val() + '\u00f7');
})

// Clear
$('#clear').on('click', function () {
    calculator.operation = "",
    calculator.evaluation = "",
    $('#display1').val("");
    $('#display2').val("");
})

// Backspace
$('#backspace').on('click', function () {
    calculator.operation = calculator.operation.slice(0, calculator.operation.length-1);
    $('#display1').val($('#display1').val().slice(0, $('#display1').val().length-1));
})

// Equal
$('#equal').on('click', function () {

    calculator.evaluate();
    console.log(calculator);

    $('#display1').val("");
    $('#display2').val(calculator.evaluation);
})

$('#ans').on('click', function () {    
    
    if(calculator.evaluation){ 
        calculator.operation = calculator.operation + calculator.evaluation;
        $('#display1').val($('#display1').val() + 'Ans');
    }
})