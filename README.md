# nalin-DevTinder-UI

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

EP:16
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



## crafted
Made with ❤️ love for developers everywhere
Crafted with 💻 love, for coders by coders
Built with ❤️ passion for the developer community
Designed with 💻 care, by devs for devs
Made with ❤️ dedication for those who turn ideas into code
Crafted with 💻 love, inspired by the dev spirit
Created with ❤️ heart for devs who love to connect
Built with 💻 purpose, by devs for devs
Made with ❤️ love & clean code for all developers
Crafted with 💻 love to empower your next big idea




- Body
    NavBar
    Route = / => feed
    Route = /login => i will show login page
    Route = /connections => i will show all my connections
    Route = /profile => show my profile


- Deployment Steps:
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





