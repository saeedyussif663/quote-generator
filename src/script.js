let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =  [
    {
        quote: "First they ignore you, then they laugh at you, then they fight you, then you win.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
        person: "Aristotle"
    },
    {
        quote: "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
        person: "Carl Jung"
    },
    {
        quote: "The best way to predict the future is to create it.",
        person: "Peter Drucker"
    },
    {
        quote: "The best revenge is to be unlike him who performed the injury.",
        person: "Marcus Aurelius"
    },
];

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})