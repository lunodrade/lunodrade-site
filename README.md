# Getting Started

### Requirements
* nodejs (npm) - <http://nodejs.org/>
* grunt - <http://gruntjs.com/>
* ruby - <https://www.ruby-lang.org/>
* sass - <https://rubygems.org/gems/sass/>
* git - <http://git-scm.com/>
* bower - <http://bower.io/>
	
### Configuring the environment

1. Install Ruby.
2. Open "Start Command Prompt with Ruby", them enter the following commands:

 	```
	$ gem install sass
	```
3. Close "Start Command Prompt with Ruby".
4. Install nodejs.
5. Open "Node.js command prompt", them enter the following commands:

 	```
 	$ npm install -g grunt-cli
 	$ npm install -g bower
	```
6. Close "Node.js command prompt".
7. Install Git.
    
### Installation the dependencies of the project

1. Open "Node.js command prompt" on project's dir, them enter the following commands:

 	```
	$ npm install
	$ grunt build
	$ grunt release
	```
2. Close "Node.js command prompt".
3. Open "Git Bash" on project's dir, them enter the following commands:

 	```
    $ bower install
	```
4. Close "Git Bash".
5. Enjoy! :)

---------------
	
First you need to install the proper node modules using `npm install`. Then to have grunt start watching for changes, run `grunt dev`
