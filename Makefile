install:
	npm ci

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test:
	npm test

test-coverage:
  	npm test -- --coverage --coverageProvider=v8