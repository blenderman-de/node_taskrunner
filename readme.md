
Node Taskrunner 0.0.5
=====================
28.03.2014 09:32:01 

Proof of concept for a many-to-many upd broadcast recipie task runner. 

![](https://s3-eu-west-1.amazonaws.com/uploads-eu.hipchat.com/56830/387870/b5KGzMYhD3ns4O2/node-taskrunner.png)

> Warning.  This is highly experimental software, use it at your own risk.




Install
------- 
Git Download 

Download `node.exe` v6.9 & copy to root folder

For npm you need a global Node install. You can use the current version. 


	npm install

Usage
-----

run `start-client.bat`

run `sender.bat RECIPIE-NAME GROUPNAME(s)`


ToDo
----

- new name
- documentation
- http interface 
- recipe System
	- Base
		- Coffescript
		- Batch
	- Sorted by Folder
		- silent
		- userpromt
		- timeoutpromt
- Message Queue 
	- zeromq
	- axon
- Security
	- communication
	- Passwort System
		- Standard
		- User X   


Depedencies
-----------


    "colors": "~0.6.2"
    "sugar": "~1.4.1"


License
-------

(The MIT License)

Copyright (c) 2014 by: Oliver Nürnberger <no@blenderman.de>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.