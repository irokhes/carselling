 
 
REPORTER = spec
 
test:
	./node_modules/mocha/bin/mocha test -u bdd \
	--reporter $(REPORTER)

test-w:
	./node_modules/mocha/bin/mocha test -u bdd \
	--reporter $(REPORTER) \
	--watch
 
 
.PHONY: test test-w