(function() {
  var Listener, listener;

  console.log('hi')
  if (!('webkitSpeechRecognition' in window)) {
    alert(':(');
  }

  Listener = class Listener {
    constructor() {
      this.recog = new webkitSpeechRecognition();
      this.initialize();
    }

    initialize(options) {
      this.el = $('body');
      this.btn = $('button');
      this.txt = $('h1');
      this.recog.continuous = true;
      this.recog.interimResults = true;
      this.recog.onstart = _.bind(this.onstart, this);
      this.recog.onresult = _.bind(this.onresult, this);
      this.recog.onerror = _.bind(this.onerror, this);
      this.recog.onend = _.bind(this.onend, this);
      return this.el.on('click', 'button', _.bind(this.buttonClick, this));
    }

    buttonClick(event) {
      return this.recog.start();
    }

    onstart(event) {
      this.btn.text('LISTENING...');
      return console.log('START');
    }

    onresult(event) {
      var result, ri;
      ri = event.resultIndex;
      result = event.results[ri][0].transcript;
      return this.display_text(result);
    }

    onerror(event) {
      this.display_text(event.error);
      return console.log(event);
    }

    onend(event) {
      this.btn.text('LISTENING ENDED');
      _(this.reset_btn).delay(500).value()();
      return console.log('END');
    }

    reset_btn() {
      return this.btn.text('START LISTENING');
    }

    display_text(text) {
      // var natural = require('natural');
      // var Analyzer = natural.SentimentAnalyzer;
      // var stemmer = natural.PorterStemmer;
      // var analyzer = new Analyzer("English", stemmer, "afinn");
      // // getSentiment expects an array of strings
      var x = 'yes'
      localStorage.setItem('local', x);  
      return this.txt.text(text);
    }

  };

  listener = new Listener;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFFBQUEsRUFBQTs7RUFBQSxJQUFHLENBQUksQ0FBQyx5QkFBQSxJQUE2QixNQUE5QixDQUFQO0lBQ0UsS0FBQSxDQUFNLElBQU4sRUFERjs7O0VBR00sV0FBTixNQUFBLFNBQUE7SUFFRSxXQUFhLENBQUEsQ0FBQTtNQUNYLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBSSx1QkFBSixDQUFBO01BQ1QsSUFBQyxDQUFBLFVBQUQsQ0FBQTtJQUZXOztJQUliLFVBQVksQ0FBQyxPQUFELENBQUE7TUFDVixJQUFDLENBQUEsRUFBRCxHQUFNLENBQUEsQ0FBRSxNQUFGO01BQ04sSUFBQyxDQUFBLEdBQUQsR0FBTyxDQUFBLENBQUUsUUFBRjtNQUNQLElBQUMsQ0FBQSxHQUFELEdBQU8sQ0FBQSxDQUFFLElBQUY7TUFFUCxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVAsR0FBd0I7TUFDeEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxjQUFQLEdBQXdCO01BRXhCLElBQUMsQ0FBQSxLQUFLLENBQUMsT0FBUCxHQUFtQixDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxPQUFSLEVBQWlCLElBQWpCO01BQ25CLElBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUCxHQUFtQixDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxRQUFSLEVBQWtCLElBQWxCO01BQ25CLElBQUMsQ0FBQSxLQUFLLENBQUMsT0FBUCxHQUFtQixDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxPQUFSLEVBQWlCLElBQWpCO01BQ25CLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFtQixDQUFDLENBQUMsSUFBRixDQUFPLElBQUMsQ0FBQSxLQUFSLEVBQWUsSUFBZjthQUVuQixJQUFDLENBQUEsRUFBRSxDQUFDLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFFBQWhCLEVBQTBCLENBQUMsQ0FBQyxJQUFGLENBQU8sSUFBQyxDQUFBLFdBQVIsRUFBcUIsSUFBckIsQ0FBMUI7SUFiVTs7SUFlWixXQUFhLENBQUMsS0FBRCxDQUFBO2FBQ1gsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLENBQUE7SUFEVzs7SUFHYixPQUFTLENBQUMsS0FBRCxDQUFBO01BQ1AsSUFBQyxDQUFBLEdBQUcsQ0FBQyxJQUFMLENBQVUsY0FBVjthQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtJQUZPOztJQUlULFFBQVUsQ0FBQyxLQUFELENBQUE7QUFDUixVQUFBLE1BQUEsRUFBQTtNQUFBLEVBQUEsR0FBSyxLQUFLLENBQUM7TUFDWCxNQUFBLEdBQVMsS0FBSyxDQUFDLE9BQVEsQ0FBQSxFQUFBLENBQUksQ0FBQSxDQUFBLENBQUUsQ0FBQzthQUM5QixJQUFDLENBQUEsWUFBRCxDQUFjLE1BQWQ7SUFIUTs7SUFLVixPQUFTLENBQUMsS0FBRCxDQUFBO01BQ1AsSUFBQyxDQUFBLFlBQUQsQ0FBYyxLQUFLLENBQUMsS0FBcEI7YUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7SUFGTzs7SUFJVCxLQUFPLENBQUMsS0FBRCxDQUFBO01BQ0wsSUFBQyxDQUFBLEdBQUcsQ0FBQyxJQUFMLENBQVUsaUJBQVY7TUFDQSxDQUFBLENBQUUsSUFBQyxDQUFBLFNBQUgsQ0FBYSxDQUFDLEtBQWQsQ0FBb0IsR0FBcEIsQ0FBd0IsQ0FBQyxLQUF6QixDQUFBLENBQUEsQ0FBQTthQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtJQUhLOztJQUtQLFNBQVcsQ0FBQSxDQUFBO2FBQ1QsSUFBQyxDQUFBLEdBQUcsQ0FBQyxJQUFMLENBQVUsaUJBQVY7SUFEUzs7SUFHWCxZQUFjLENBQUMsSUFBRCxDQUFBO2FBQ1osSUFBQyxDQUFBLEdBQUcsQ0FBQyxJQUFMLENBQVUsSUFBVjtJQURZOztFQTdDaEI7O0VBZ0RBLFFBQUEsR0FBVyxJQUFJO0FBbkRmIiwic291cmNlc0NvbnRlbnQiOlsiaWYgbm90ICgnd2Via2l0U3BlZWNoUmVjb2duaXRpb24nIG9mIHdpbmRvdylcbiAgYWxlcnQgJzooJ1xuXG5jbGFzcyBMaXN0ZW5lclxuICBcbiAgY29uc3RydWN0b3I6ICgpIC0+XG4gICAgQHJlY29nID0gbmV3IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uKClcbiAgICBAaW5pdGlhbGl6ZSgpXG4gIFxuICBpbml0aWFsaXplOiAob3B0aW9ucykgLT5cbiAgICBAZWwgPSAkKCdib2R5JylcbiAgICBAYnRuID0gJCgnYnV0dG9uJylcbiAgICBAdHh0ID0gJCgnaDEnKVxuICAgIFxuICAgIEByZWNvZy5jb250aW51b3VzICAgICA9IHRydWVcbiAgICBAcmVjb2cuaW50ZXJpbVJlc3VsdHMgPSB0cnVlXG4gICAgXG4gICAgQHJlY29nLm9uc3RhcnQgICA9IF8uYmluZCBAb25zdGFydCwgQFxuICAgIEByZWNvZy5vbnJlc3VsdCAgPSBfLmJpbmQgQG9ucmVzdWx0LCBAXG4gICAgQHJlY29nLm9uZXJyb3IgICA9IF8uYmluZCBAb25lcnJvciwgQFxuICAgIEByZWNvZy5vbmVuZCAgICAgPSBfLmJpbmQgQG9uZW5kLCBAXG4gICAgXG4gICAgQGVsLm9uICdjbGljaycsICdidXR0b24nLCBfLmJpbmQgQGJ1dHRvbkNsaWNrLCBAXG4gICAgXG4gIGJ1dHRvbkNsaWNrOiAoZXZlbnQpIC0+XG4gICAgQHJlY29nLnN0YXJ0KClcbiAgICBcbiAgb25zdGFydDogKGV2ZW50KSAtPlxuICAgIEBidG4udGV4dCAnTElTVEVOSU5HLi4uJ1xuICAgIGNvbnNvbGUubG9nICdTVEFSVCdcbiAgICBcbiAgb25yZXN1bHQ6IChldmVudCkgLT5cbiAgICByaSA9IGV2ZW50LnJlc3VsdEluZGV4XG4gICAgcmVzdWx0ID0gZXZlbnQucmVzdWx0c1tyaV1bMF0udHJhbnNjcmlwdFxuICAgIEBkaXNwbGF5X3RleHQgcmVzdWx0XG4gICAgXG4gIG9uZXJyb3I6IChldmVudCkgLT5cbiAgICBAZGlzcGxheV90ZXh0IGV2ZW50LmVycm9yXG4gICAgY29uc29sZS5sb2cgZXZlbnRcbiAgICBcbiAgb25lbmQ6IChldmVudCkgLT5cbiAgICBAYnRuLnRleHQgJ0xJU1RFTklORyBFTkRFRCdcbiAgICBfKEByZXNldF9idG4pLmRlbGF5KDUwMCkudmFsdWUoKSgpXG4gICAgY29uc29sZS5sb2cgJ0VORCdcbiAgXG4gIHJlc2V0X2J0bjogKCkgLT5cbiAgICBAYnRuLnRleHQgJ1NUQVJUIExJU1RFTklORydcbiAgICAgICBcbiAgZGlzcGxheV90ZXh0OiAodGV4dCkgLT5cbiAgICBAdHh0LnRleHQodGV4dClcbiBcbmxpc3RlbmVyID0gbmV3IExpc3RlbmVyIl19
//# sourceURL=coffeescript