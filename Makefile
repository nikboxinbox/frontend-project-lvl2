# Makefile
# gendiff:
# 	node bin/gendiff.js
install:
	npm ci

publish:
	npm publish --dry-run
	npm link

make lint:
	npx eslint .

make lint fix:
	npx eslint --fix .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

.PHONY:		gendiff.js