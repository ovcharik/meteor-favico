assert = require 'assert'

suite 'Favico', ->

  test 'Environment setup', (done, server, client) ->
    client.eval ->
      Meteor.startup ->
        emit 'isFavicoExist', Favico?

    client.once 'isFavicoExist', (expectTrue) ->
      assert expectTrue
      done()
