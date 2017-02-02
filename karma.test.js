var testsContext;

require('phantomjs-polyfill/bind-polyfill.js')
require('angular')
require('angular-mocks')

testsContext = require.context('./src', true, /spec\.(t|j)s$/)
testsContext.keys().forEach(testsContext)

testsContext = require.context('./test/mockups', true, /spec\.(t|j)s$/)
testsContext.keys().forEach(testsContext)
