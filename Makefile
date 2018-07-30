test: README.md
	@yarn prettier --list-different '**/*.{js,json,md,ts,yml}'
	@yarn tslint --config tslint.json --project . --format verbose '**/*.ts'
	@touch $@

README.md: lib
	node lib/create-readme.js

lib: src/*.ts src/*/*.ts node_modules tsconfig.json
	@yarn tsc --project .
	@touch $@

node_modules: package.json yarn.lock
	@yarn install --check-files
	@touch $@

yarn.lock:
	@yarn

.PHONY: clean
clean:
	rm -rf lib/
