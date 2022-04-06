# hackable-chat
Hackable Chat

Try out Hackable Chat, a mini version of my chat app which is vulnerable by design!  
A simple yet effective mini chat app with built in vulnerabilities, designed for demonstrating SQL injection.  It's also a great for penetration testing.

Built with: Vanilla Javascript/HTML/CSS, Node.JS and PostgreSQL

Check it out at https://hacker-chat-101.herokuapp.com/

Inspired by my Chat App: Let's Chat Day-2-Nite. 

Try typing this into both the username and password fields to access the Spongebob chats:

' OR 1=1; -- 

The 2nd part of the OR statement evaluates to true (empty string OR 1=1) effectively bypassing authentication.  This is an example of why we should always use parameterized queries to avoid SQL injection.  Node-Postgres supports parameterized queries; use them liberally!

If you look at the comments in server.js, you'll see I commented out the 'check username and password if...else' logic for an easier demonstration of how SQL injection works, but even with it in place, a bad actor can still do damage to your database and possibly more (such as modifying tables in your database by inserting SQL commands into the initial query like so):

' OR 1=1; SELECT crabbypattyrecipe FROM messages WHERE username = 'mrCrabs';  -- 

Plankton just hacked Mr. Crabs' recipe!

I plan to build on this little baby and use it for demonstrating a bunch of different secure coding solutions.  Stay tuned for updates...

Enjoy!

Connect with me on Linked In: https://www.linkedin.com/in/cas-spicer/

Built by Cas Spicer, Full Stack Web Developer & Problem Solver Extraordinaire

