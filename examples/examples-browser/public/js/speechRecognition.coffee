if not ('webkitSpeechRecognition' of window)
  alert ':('

class Listener

  constructor: () ->
    @recog = new webkitSpeechRecognition()
    @initialize()
  
  initialize: (options) ->
    @el = $('body')
    @btn = $('button')
    @txt = $('h1')
    
    @recog.continuous     = true
    @recog.interimResults = true
    
    @recog.onstart   = _.bind @onstart, @
    @recog.onresult  = _.bind @onresult, @
    @recog.onerror   = _.bind @onerror, @
    @recog.onend     = _.bind @onend, @
    
    @el.on 'click', 'button', _.bind @buttonClick, @
    
  buttonClick: (event) ->
    @recog.start()
    
  onstart: (event) ->
    @btn.text 'LISTENING...'
    console.log 'START'
    
  onresult: (event) ->
    ri = event.resultIndex
    result = event.results[ri][0].transcript
    @display_text result
    
  onerror: (event) ->
    @display_text event.error
    console.log event
    
  onend: (event) ->
    @btn.text 'LISTENING ENDED'
    _(@reset_btn).delay(500).value()()
    console.log 'END'
  
  reset_btn: () ->
    @btn.text 'START LISTENING'
       
  display_text: (text) ->
    @txt.text(text)
  
 
listener = new Listener