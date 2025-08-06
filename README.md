<h1 align="center">Welcome to Word Ninjas</h1>

<p align="center">
  <a href="https://t.me/+-fuR_NoIRrVjZTFk" target="blank"><img width="600" height="600" alt="image" src="https://res.cloudinary.com/dvnys8hkd/image/upload/v1754495913/Anagram_tele_wt3gop.png" />

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
       │   ├── constants/     # Reusable constant values (e.g Game messages)
       │   ├── enums/         # TypeScript enums for well-defined sets (e.g Cron Expressions, Seconds Delay)
       │   ├── handlers/      # Logic to handle different user commands and game interactions (e.g message, start, help commands)
       │   └── interafces/    # TypeScript interfaces for type-safety
       │   ├── jobs/          # Background jobs or schedulers (e.g Game rounds restart)
       │   ├── models         # Entities or Data Model (e.g Player, Round Winner)
       │   ├── services/      # Logic that handles core game processes (contains bot, game, player and words services)
       │   ├── store          # Temporary Data storage (Redis Adapter initialization, default data)
       │   ├── types          # Global or shared TypeScript types
       │   ├── utils/         # Utility functions (e.g message formatting)  
       │   ├── validations/   # Input validation logic to keep data clean and safe
       │   └── main.ts/       # Project entry point for boostraping the application
     ├── .env                 # Contains environment variables
     ├── .env.example         # Sample environment variable blueprint for development
     ├── .gitignore           # Specifies which files/folders to ignore in Git
     ├── package-lock.json    # Auto-generated lockfile for consistent dependency versions
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
     ├── other root directory files                
     ├── ...........         
     └── tsconfig.json        # TypeScript configuration
  ```
  
- Run the below command to start the development server and visit your telegram group chat
  ```bash
  $ npm run start
  ```

## 🪪 License and Copyright

This project is licensed under [MIT LICENSE](./LICENSE)  

Copyright 2025 by [Taofeek Abdulazeez](https://github.com/Taofeekabdulazeez)

