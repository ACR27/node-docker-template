FROM node:4

# Install Dependencies
ADD package.json package.json
RUN npm install --production

# Copy Code
ADD . .

CMD ["node","index.js"]
