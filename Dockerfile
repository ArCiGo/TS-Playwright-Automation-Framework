FROM mcr.microsoft.com/playwright:v1.28.0-focal

# Copy whole project
COPY . /e2e

WORKDIR /e2e

RUN npm install
# Install browsers
RUN npx playwright install

# Run playwright test
CMD [ "npx", "playwright", "test", "--reporter=list" ]