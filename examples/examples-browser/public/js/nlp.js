var yay = localStorage.getItem('local');  
console.log(yay)
// var natural = require('natural');
// var Analyzer = natural.SentimentAnalyzer;
// var stemmer = natural.PorterStemmer;
// var analyzer = new Analyzer("English", stemmer, "afinn");
// console.log(analyzer.getSentiment(['okay','sure']));


// const { NlpManager } = require('node-nlp');
 
// const manager = new NlpManager({ languages: ['en'] });
// // Adds the utterances and intents for the NLP
// manager.addDocument('en', 'goodbye for now', 'greetings.bye');
// manager.addDocument('en', 'bye bye take care', 'greetings.bye');
// manager.addDocument('en', 'okay see you later', 'greetings.bye');
// manager.addDocument('en', 'bye for now', 'greetings.bye');
// manager.addDocument('en', 'i must go', 'greetings.bye');
// manager.addDocument('en', 'hello', 'greetings.hello');
// manager.addDocument('en', 'hi', 'greetings.hello');
// manager.addDocument('en', 'howdy', 'greetings.hello');
 
// // Train also the NLG
// manager.addAnswer('en', 'greetings.bye', 'Till next time');
// manager.addAnswer('en', 'greetings.bye', 'see you soon!');
// manager.addAnswer('en', 'greetings.hello', 'Hey there!');
// manager.addAnswer('en', 'greetings.hello', 'Greetings!');
 
// // Train and save the model.
// (async() => {
//     await manager.train();
//     manager.save();
//     const response = await manager.process('en', 'I should go now');
//     console.log(response);
// })();


const {natural} = require('natural');

const {classifier} = new natural.BayesClassifier();

classifier.addDocument('yes', 'yes');
classifier.addDocument('okay, sure', 'yes');
classifier.addDocument('alright', 'yes');
classifier.addDocument('why not', 'yes');
classifier.addDocument('no', 'no');
classifier.addDocument('not really', 'no');
classifier.addDocument('nah', 'no');
classifier.addDocument('not in the mood', 'no');


// classifier.train();


// console.log(classifier.classify('sure why not'));
// console.log(classifier.classify('nah I am good'));
