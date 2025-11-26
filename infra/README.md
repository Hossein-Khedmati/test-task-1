# Infrastructure

This directory contains Docker configurations for the project.

## Docker Files

- `Dockerfile.next` - Configuration for containerizing the Next.js application
- `Dockerfile.storybook` - Configuration for containerizing Storybook

## Usage

### Building and Running Next.js Container

```bash
# Build the Next.js image
docker build -t nextjs-app -f infra/Dockerfile.next .

# Run the container
docker run -p 3000:3000 nextjs-app
```

### Building and Running Storybook Container

```bash
# Build the Storybook image
docker build -t storybook -f infra/Dockerfile.storybook .

# Run the container
docker run -p 6006:6006 storybook
```

## Docker Compose (Optional)

You can also set up a docker-compose.yml file in the root directory to run both containers together:

```yaml
version: '3'

services:
  nextjs:
    build:
      context: .
      dockerfile: infra/Dockerfile.next
    ports:
      - "3000:3000"

  storybook:
    build:
      context: .
      dockerfile: infra/Dockerfile.storybook
    ports:
      - "6006:6006"
``` 