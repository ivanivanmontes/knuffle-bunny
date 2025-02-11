# Start the React app
start:
	npm start

# Install dependencies
install:
	npm install

# Build prod
build:
	npm run build

format:
	npx prettier --write .

# Clean node_modules and reinstall
clean-install:
	rm -rf node_modules package-lock.json && npm install


clean:
	rm -rf build
