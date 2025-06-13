var score = 0;
let current_question = 0;

    /**questions for the quiz */
    const quiz = [ {
        quest : 'What is the keyword for creating a javascript function?',
        ans : [{ content : 'func', correct : false},
        {content : 'def', correct : false},
        {content : 'function', correct : true},
        {content : 'fun', correct : false}]
    },
    {
        quest : 'What is the best method to learn javascript?',
        ans : [{ content : 'practice', correct : true},
        {content : 'theory', correct : false},
        {content : 'copying code', correct : false},
        {content : 'sleeping', correct : false}]
    },
    {
        quest : 'the process of building websites is called?',
        ans : [{ content : 'cybersecurity', correct : false},
        {content : 'web development', correct : true},
        {content : 'artificial intelligence', correct : false},
        {content : 'data analysis', correct : false}]
    },
    {
        quest : 'Which of the following is a code editor?',
        ans : [{ content : 'microsoft word', correct : false},
        {content : 'google chrome', correct : false},
        {content : 'Pes 2017', correct : false},
        {content : 'visual studio', correct : true}]
    },
    {
        quest : 'Which of the following is not a javascript framework?',
        ans : [{ content : 'vue', correct : false},
        {content : 'laravel', correct : true},
        {content : 'svelte', correct : false},
        {content : 'angular', correct : false}]
    }
]

/** Load the quiz questions into the html page */
function loadquiz() {
    const question = document.getElementById('legend');
    const options = document.getElementById('options');

    question.innerHTML = quiz[current_question].quest;
    options.innerHTML = " ";
    
    for(let i = 0; i < quiz[current_question].ans.length; i++) {
            const block = document.createElement('div');
            const input = document.createElement('input');
            const label = document.createElement('label');

            input.type = 'radio';
            input.name = 'answer';
            input.value = i;

            label.innerHTML = quiz[current_question].ans[i].content;
            block.appendChild(input);
            block.appendChild(label);
            document.getElementById('options').appendChild(block);
    }
}
loadquiz();


/** show Total score on the html page */
function total() {
    const total_score = document.getElementById('show');
    total_score.innerHTML = "Your score is " + score +" out of " + quiz.length;
}


/**cycle through questions */
function next() {
    if (current_question < quiz.length - 1) {
        current_question++;
        loadquiz();
    } else {
        document.getElementById('myform').remove();
        document.querySelector('button').remove();
        total();
    }
}


/** check the answer entered by the user */
function checker() {
    const checked = parseInt(document.querySelector('input[name = "answer"]:checked').value);
    if (quiz[current_question].ans[checked].correct) {
        score++;
        next();
    } else {
        next();
    }
}






/*
    var legend = document.createElement('legend');
    legend.innerHTML = question.q1;
    var form1 = document.getElementById('form1');
    form1.appendChild(legend);

    const que = {
        q1 : "what is my name",
        a1 : "eustace",
        a2 : "fumnanya",
        a3 : "mbanefo",
        a4 : "menez"
    };


document.getElementById('ans0').innerHTML = 'Fumi';
document.getElementById('ans2').value = 'I changed value';
let num = document.getElementById('myform').elements.item(1).value;
document.getElementById('show').innerHTML = num;
*/