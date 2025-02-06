# Makefile for managing React app

# Start the React app
start:
	npm start

# Install dependencies
install:
	npm install

# Build the production version
build:
	npm run build

# Format code using Prettier
format:
	npx prettier --write .

# Deploy to GitHub Pages (if applicable)
deploy:
	npm run deploy

# Clean node_modules and reinstall
clean-install:
	rm -rf node_modules package-lock.json && npm install

# Remove build files
clean:
	rm -rf build

# Push changes to GitHub
push:
	git add . && git commit -m "Update project" && git push

.PHONY: start install build format deploy clean-install clean push
