<h1 align="center">Welcome to Word Ninjas</h1>

<p align="center">
  <a href="https://t.me/+-fuR_NoIRrVjZTFk" target="blank"><img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/8234ad51-61cc-4214-ba57-1198b677723b" />
</a>
</p>

[Word Ninjas](https://t.me/+-fuR_NoIRrVjZTFk) is a multiplayer Telegram group game where players compete to solve anagrams in real-time


### Getting started with collaboration

Here are the steps to getting your development environment working

---

##  Create a Telegram bot.

1. Open Telegram and search for `@BotFather`.
2. Start a chat and type `/start`.
3. Type `/newbot` to create a new bot.
4. Follow the prompts:
   - Choose a name for your bot.
   - Choose a unique username ending with `bot` (e.g., `mywordbot`).
5. You will receive a **bot token**. Save this token as you’ll use it in your **.env** file.
6. Create a new telegram group.
7. Add the bot your new telegram group chat and promote the bot as an admin.
8. Send a message to the group chat.
9. Visit https://api.telegram.org/bot{YOUR-BOT-TOKEN}/getUpdates in your browser *(Note: Input your bot token!)*
10. From the JSON response, you can see your **chat id**. Save this chat id as you’ll use it in your **.env** file.
---

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

- Note the following changes in your project root directory after installation
  ```plaintext
     ├── dist/                # Contains all the compiled JavaScript code 
     ├── node_modules/        # Contains all the dependencies (libraries and packages) needed.
     ├── src/
       │   ├── other folders/
       |   |........
       │   └── main.ts/       # Project entry point for boostraping the application
     ├── .env                 # Contains environment variables
     ├── .env.example         # Contains environment variables blueprints
     ├── .gitignore
     ├── package-lock.json
     ├── package.json         # Project metadata and dependencies
     └── tsconfig.json        # TypeScript configuration
  ```
  
- Run the below command to start the development server and visit your telegram group chat
  ```bash
  $ npm run start
  ```
