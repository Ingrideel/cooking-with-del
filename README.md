# Cooking with Del

A web app where you can find new recipes to try in the kitchen.

## Applications

To run both applications you first need to install the NodeJs runtime using one of the following methods:

- [Download link](https://nodejs.org/en/download/current)

- using [NVM](https://github.com/nvm-sh/nvm)

### Client

#### 1. Open the client folder into the terminal

```
cd client
```

#### 2. Create a .env file at the root of the client folder

```
touch .env
```

#### 3. Add the secret environment variables to the .env file

Example:

cooking-with-del/client/.env

```
VITE_API_URL="http://localhost:8080"
VITE_API_TOKEN="Vite API Token"
```

#### 4. Install the dependencies

Using npm:

```
npm install
```

Using yarn:

```
yarn install
```

Using pnpm:

```
pnpm install
```

#### 5. Start

- **In development mode**

Run using npm:

```
npm dev
```

Run using yarn:

```
yarn dev
```

Run using pnpm:

```
pnpm dev
```

- **In production mode**

Run using npm:

```
npm build
npm preview
```

Run using yarn:

```
yarn build
yarn preview
```

Run using pnpm:

```
pnpm build
pnpm preview
```

### Server

#### 1. Open the server folder into the terminal

```
cd server
```

#### 2. Create a .env file at the root of the server folder

```
touch .env
```

#### 3. Add the secret environment variables to the .env file

Example:

cooking-with-del/server/.env

```
#App
PORT = 8080
JWT_SECRET="Your JWT Secret"
CLIENT_URL="http://localhost:6060"

#DB
DATABASE_URL="postgres://your-db-url.tech"
DIRECT_URL="postgres://your-db-direct-url.tech"

#Images
CLOUDINARY_NAME="Cloudinary App Name"
CLOUDINARY_API_KEY="Cloudinary App Key"
CLOUDINARY_API_SECRET="Cloudinary API Secret"
```

#### 4. Install the dependencies

Using npm:

```
npm install
```

Using yarn:

```
yarn install
```

Using pnpm:

```
pnpm install
```

#### 5. Start

- **Normal**

Run using npm:

```
npm start
```

Run using yarn:

```
yarn start
```

Run using pnpm:

```
pnpm start
```

- **In development mode**

Run using npm:

```
npm dev
```

Run using yarn:

```
yarn dev
```

Run using pnpm:

```
pnpm dev
```

- **In production mode**

Run using npm:

```
npm build
npm serve
```

Run using yarn:

```
yarn build
yarn serve
```

Run using pnpm:

```
pnpm build
pnpm serve
```
