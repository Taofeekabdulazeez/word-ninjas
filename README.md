<h1 align="center">Welcome to Word Ninjas</h1>

<p align="center">
  <a href="https://t.me/+-fuR_NoIRrVjZTFk" target="blank"><img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/8234ad51-61cc-4214-ba57-1198b677723b" />
</a>
</p>

[Word Ninjas](https://t.me/+-fuR_NoIRrVjZTFk) is a multiplayer Telegram group game where players compete to solve anagrams in real-time


### Getting started with collaboration

Here are the steps to getting your development environment working

- Create a **.env** file in your root directory
  ```plaintext
     ├── src/
       │   ├── constants/
       │   ├── enums/
       │   ├── handlers/      
       │   └── interafces/    
       │   ├── jobs/
       │   ├── models
       │   ├── services/      
       │   ├── store
       │   ├── types
       │   ├── utils/         
       │   ├── validations/   
       │   └── main.ts/       # Project entry point for boostraping the application
     ├── .env                 # Contains environment variables
     ├── .env.example         # Contains environment variables blueprints
     ├── .gitignore
     ├── package-lock.json
     ├── package.json         # Project metadata and dependencies
     └── tsconfig.json        # TypeScript configuration
  ```
  
- Update the **.env** with the following credentials. Alternative you can take a look at the **.env.example** in the project root directory to get an intuition on the needed credentials to quick start the development environment.
  ```env
   BOT_TOKEN=your-bot-token
   ROOM_CHAT_ID=your-room-chat-id
   REDIS_USERNAME=your-redis-database-username
   REDIS_PASSWORD=your-redis-database-password
   REDIS_HOST=your-redis-host-url
   REDIS_PORT=your-redis-port
   SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_URL=your-supabase-url
   SUPABASE_PASSWORD=your-supabase-password
  ```
  
- Run the below command to install all project dependencies
  ```bash
  $ npm install
  ```
  
- Run the below command to start the development server and visit your telegram group chat
  ```bash
  $ npm run dev
  ```
