# nalin-DevTinder-UI:

- Create a vite + React application
- Remove Unecessary code and create a first line oif app
- Install tailwind css
- add the tailwing.config.js and postcss.config.js files manually
- install daisyui pre build component library
- add navbar component to you app.jsx file
- create a NavBar.jsx file and put all the code related to header into that file and import it
- Installed react router dom
- create the BrowserRouter > Routes > Route == /body > RouteChilderns
- create an Outlet in your body component
- create footer component

# EP:16
- create a login page
- Install axios
- CORS - install cors in backend ==> add the middleware to app with configurations are origin and credentials: true
- whenever you are making an API call so pass axios ==> {credentials true}
- Install Redux toolkit and redux-react
- create a configureStore => provider => create a slice => add Reducer to store
- add redux devtools in chrome extension
- login and see if your data is coming properly or not into the store
- NavBar should update as soon as user logs in
- refactor our code by adding constants file inside utils and update the BASE_URL
- create a components folder and move all the compnents into components folder

# EP:17
- You should not be able to access other routes without login
- if token is not present to .login page
- logout feature completed
- get the feed and add the feed into store
- build the user feed card
- build the edit profile page where you can edit your firstName, lastName, age, gender, about,  photoUrl
- and also show the update the message using daisyui component toast
- for gender make dropdown where user select the options
- for about and photourl updated the textarea elememt

# EP:18
- New Page - see all my connections page
- New Page - see all my connection requests
- Feature - accept reject connection request

# EP: 19
- send ignore/interested from the user card from the feed

# Remaining
- sign up new user
- E2E testing


# EP : UI flow One
- Home Page creation

- Body
    NavBar
    Route = / => feed
    Route = /login => i will show login page
    Route = /connections => i will show all my connections
    Route = /profile => show my profile


# Deployment Steps:
- Signup on AWS
- Lanunch an Instance
- chmod 400 devcircle-secret.pem
- connect to your machine ssh -i "devcircle-secret.pem" ubuntu@ec2-54-196-190-168.compute-1.amazonaws.com
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
- install node version nvm install 22.14.0
- let clone your frontend and backend projects into your aws machine from your github
- go to your project and do the npm install on ASW machine
- Frontend Deplyment Steps:
    - npm install - to downlad all the dependencies
    - npm run build - to build the production build
    - sudo apt update - to update all the versions of the apps
    - sudo apt install nginx - to install the nginx 
    - sudo systemctl start nginx - to start your nginx
    - sudo systemctl enable nginx - to enable nginx
    - copy code from dist(build files) to /var/www/html/
    - using this comand sudo scp -r dist/* /var/www/html/
    - check for /var/www/html/ path wether files are came copied and pasted or not
    - once you done all those steps if you try to access your public IP address http://54.196.190.168/
    - it won't work because we have to enable port :80 
    - Go to your security groups and and enable the port :80 then you can see your Public IP up and running

# Backend Deployment Steps:
    - allowed EC2 instance public IP on mongoDB sever
    - installed pm2 (process management) using npm install pm2 -g
    - pm2 start npm -- start : to run 24/7 in the background
    - pm2 logs: to check all the logs
    - pm2 list: to see the all running processes
    - pm2 flush <name> : to remove the logs
    - pm2 stop <name> : to stop the processes
    - pm2 delete <name> : to delete the processes
    - pm2 start npm --name "devCircle-backend" -- start : to setup a new custom name for your processor
    - path of nginx config: sudo vi /etc/nginx/sites-available/default
    - press i to edit the file
    - press Esc to come to command mode
    - save and exit using :wq

    - server_name 54.196.190.168;


    - location /api/ {
        proxy_pass http://localhost:1818/;   # note the trailing /
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
       }
    - restart your nginx using: sudo systemctl restart nginx
    - modify the BASE URL in front end project to "/api"
    - try to take the git pull from front end repo to refelct recent changes.
    - then still your APIs won't to work your api's you have to do follow same front end deplyment process
    - npm run build: to create a new fresh build
    - then run sudo scp -r dist/* /var/www/html : copy all the code into /var/www/html from dist folder

# Adding a custom domain name
    - purchased doamin name from godaddy
    - signup on cloudflare & add a new domain name and it provides new nameservers
    - change the name servers on godaddy and point it to cloudflare
    - wait for sometime till your nameservers are updated took arround 15mints
    - let's create a DNS record on cloudflare 
    - DNS record: A devbuddy.in to 54.196.190.168 (public IP)
    - DNS record: CNAME www to devbuddy.in
    - once setup the above records try accessing the url and see the magic
    - to keep our website secure we enable the SSL for website
    - type is flexible where it secures the browser to cloudflare

# sending an email to AWS SES (simple email service)
- create IAM user
- Give access to AmazonSESFullAccess
- Amazon SES: create an identity 
- verify your domain name
- verify an email address
- Install AWS SDK - v3
- code example: https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
- setup ses client
- access credentials should be created on IAM under security credentials tab
- add the credentials to the env file
- write code for sesclient
- write code for sedning emails
- make the email dynamic by passing more parameters to run function like subject, body
- in v3 pass credentials as an object with accessKeyID, secretKeyId


# scheduling cron jobs
    - Installing node-cron
    - learning cron expression syntax - crontab.guru
    - schedule a cron job 
    - learnt about date-fns
    - find all the unique email id's who have got the connection request in previous day
    - send email to all of them
    - to send bulk email : explore the queue mechanism to sending the buik emails
    - Amazon SES bulk emails
    - make send function dynamic
    -bee-quee and bull npm packages for queue mechanism

# Real time chat using Websockets underlying concept(socket.io)
    - Build the UI for chat window on /chat/:targetUserId
    - setup socket.io on backend
    - npm i socket.io
    - then do the configuration on backend app.js file
    - then do the configuration on frontend as well in chat.js file install the socket.io-client
    - in backend we have required socket.io and initialize the socket receieve the server and 
    - allow the cors
    - made the connection on
    - inside the connection on
    - have to handle the events like joinChat, sendMessage
    - similarly in frontend also create a socket connetion and export it into chat.js
    - create socket emit the joinChat and messageReceived
    - now we can see the user can able to initiate the chat and sendMessages
    - now we found one issue is once user refresh the page chat window refreshing
    - to make to save the chat we are going to use the one more DB schema for that
    - Home work is Improve UI 
    - Fix Security bug: can i send message is to a person who is not my friend
        - auth issue in web sockets
    - Bug Fix: if I'm not friend, then i should not be able to send messages
    - Build a feature: Show green symbol when user is online??? or lastseend when user is not online
        - whenever there is a connection request established try to save that info and time stamp
    - Limit messages when fetching from DB
    - project idea: tic tac toe game
    - project idea-2: chess game

# Razorpay Payment Gateway Integration
    - Sign up on Razorpay & complete kyc
    - Created a UI for premium page
    - Creating an APO for backend create-order
