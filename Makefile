.PHONY: run test quality-check

run:
	@npm run dev

test:
	@npm test

quality-check:
	@npm run lint
	@npm test
	