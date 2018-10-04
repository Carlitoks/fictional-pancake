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
    ans: 0,
    operation: "",
    result: "",

    evaluate: function() {
        try {
            math.eval(this.operation);
            this.result = math.eval(this.operation);
            log.add(this.operation, this.result);
            this.operation = "";

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
    },
    edit: function(val){
        this.operation += val;
    },
    clear: function(){
        this.operation = "";
        this.result = "";
    },
    getResult: function(){
        return this.result;
    },
    isAns: function(){
        return this.ans;
    },
    addAns: function(){
        this.operation = this.operation + this.result;
        this.ans = this.result.toString().length;
    },
    backspace: function(){   
        if(this.ans){
            this.operation = this.operation.slice(0, this.operation.length-this.ans);
            this.ans = 0;
        } else { this.operation = this.operation.slice(0, this.operation.length - 1);}
    }
};

// default display values
$('#display1').val("");
$('#display2').val("");

// Digits

$('.digit').on('click', function (event) {
    calculator.edit(event.target.value);
    $('#display1').val($('#display1').val() + event.target.innerHTML);
});

// Clear
$('#clear').on('click', function () {
    calculator.clear();
    $('#display1').val("");
    $('#display2').val("");
})

// Backspace
$('#backspace').on('click', function () {
    if (calculator.isAns()) { $('#display1').val($('#display1').val().slice(0, $('#display1').val().length - 3)); }
    else{ $('#display1').val($('#display1').val().slice(0, $('#display1').val().length-1)); }
    
    calculator.backspace();
})

$('#ans').on('click', function () {    
    
    if(calculator.getResult()){ 
        calculator.addAns();
        $('#display1').val($('#display1').val() + 'Ans');
    }
})

// Equal
$('#equal').on('click', equal);
// Equal on enter
function enter( event) {
    if (event.keyCode == 13) { equal(); }
}

function equal() {
    calculator.evaluate();

    $('#display2').val(calculator.getResult());
    $('#display1').val("");

    $('#history1').val(log.getlog(0));
    $('#history2').val(log.getlog(1));
    $('#history3').val(log.getlog(2));
    $('#history4').val(log.getlog(3));
    $('#history5').val(log.getlog(4));
}