AL
# ReactJS-Spring-Boot-CRUD-Full-Stack-App

https://www.jetbrains.com/idea/download/#section=windows
https://www.mysql.com/products/workbench/
https://dev.mysql.com/downloads/installer/

https://nodejs.org/en/
https://code.visualstudio.com/
https://github.com/facebook/create-react-app
npx create-react-app react-frontend 

PS D:\Git\ReactJS-Spring-Boot-CRUD-Full-Stack-App> cd .\react-frontend\
PS D:\Git\ReactJS-Spring-Boot-CRUD-Full-Stack-App\react-frontend> npm start

#Adding bootstrap to react
https://getbootstrap.com/docs/5.0/getting-started/introduction/
or 
npm install bootstrap --save 

# connecting eachother

# adding react snippets:
https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets
 rcc - to use react snippets
 
 
npm install axios --safe

npm install react-router-dom
 

# adding Angular:
from CMD: "node -v"
from CMD: "npm -v"

https://angular.io/cli

(optional if PS is blocked) from CMD: "set-ExecutionPolicy RemoteSigned -Scope CurrentUser "
from CMD: "npm install -g @angular/cli"

To create project, you need to open VisualCode in root folder:
from CMD: "code ."

In VC open terminal: "ng new angular-frontend"
routing: YES, styling CSS
 
RUN: 
from VC Terminal: "cd .\angular-frontend\"
from VC Terminal: "ng serve"

install bootstrap. From VC Terminal in project root folder: "npm install bootstrap --save"

Generate Angular class: in VC Terminal root folder: "ng g class employee"
Generate Angular component: in VC Terminal root folder: "ng g c employee-list"
Generate Angular service: in VC Terminal root folder: "ng g s employee"


issue: "roperty 'id' has no initializer and is not definitely assigned in the constructor."
Finally found an answer. I had to make strictPropertyInitialization flag to false inside tsconfig.json. Adding this since someone came up with same issue would find this useful. (You may have to use ng serve again)
tsconfig.json

{
  "compilerOptions": {
    ...
    "strictPropertyInitialization": false
  }
}
