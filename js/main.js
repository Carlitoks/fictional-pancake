// Calculator

var log = {
    maxLength: 5,
    history: [],

    add(op, val){
        this.history.push({ operation: op , value: val});
        if(this.history.length > this.maxLength){ this.history.shift(); }
    },

    getlog(pos){
        // check on firefox before send 
        return (pos < this.history.length)? `${this.history[pos].operation} =  ${this.history[pos].value}` : '';
    }
};
//console.log(log.getlog(0));

var calculator = {
    operation: "",
    result: "",
    

    evaluate: function() {
        try {
            math.eval(this.operation);
            this.result = math.eval(this.operation);
            log.add(this.operation, this.result);
            
            return true;
        } catch (e) {
            if (e instanceof SyntaxError) { 
                this.result = "E";
                return false;
            }
            else {
                this.result = "UE";
                return false;
            }
        }
    }
};

// default display values
$('#display1').val("");
$('#display2').val("");

// Digits

$('.digit').on('click', function (event) {

    console.log(event.target);
    
    calculator.operation = calculator.operation + event.target.value;
    $('#display1').val($('#display1').val() + event.target.innerHTML);
});

// Clear
$('#clear').on('click', function () {
    calculator.operation = "",
    calculator.result = "",
    $('#display1').val("");
    $('#display2').val("");
})

// Backspace
$('#backspace').on('click', function () {
    calculator.operation = calculator.operation.slice(0, calculator.operation.length-1);
    $('#display1').val($('#display1').val().slice(0, $('#display1').val().length-1));
})

$('#ans').on('click', function () {    
    
    if(calculator.result){ 
        calculator.operation = calculator.operation + calculator.result;
        $('#display1').val($('#display1').val() + 'Ans');
    }
})

// Equal
$('#equal').on('click', equal);
// Equal on enter
function enter( event) {

    if (event.keyCode == 13) { 
        equal();
    }
}

function equal() {

    calculator.evaluate();
    console.log(calculator);

    $('#display2').val(calculator.result);

    $('#history1').val(log.getlog(0));
    $('#history2').val(log.getlog(1));
    $('#history3').val(log.getlog(2));
    $('#history4').val(log.getlog(3));
    $('#history5').val(log.getlog(4));
}