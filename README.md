# JavaScript lab 1

In this lab, you'll write some basic JavaScript.

### 1. Clone the repo & Initialize

```
cd ~/Desktop/
git clone https://github.com/meet-projects/y2s17-d6-js1.git
cd y2s17-d6-js1/
source initialize.sh
```

Open all the files of the project in sublime text with this command:
```
subl .
```

Now, run the web server. 
```
flask run
```

Open up your browser and navigate to
[http://127.0.0.1:5000](http://127.0.0.1:5000).

### 2. Exercises

#### Getting started

Look at the file `index.html` in the `templates` folder. Notice how we've
included the JavaScript at the top using `url_for('static', ...)`. In the lab,
you'll be typing some of your code into the console, and putting some of it in
`static/js/script.js`.

This is the same way you should organize your code for your final projects!

Remember that if you're trying to debug your code, you need to open the console
(Ctrl+Shift+J) to see any error messages.


#### Exercise 1

Find the part of `script.js` that says `BEGINNING OF EXERCISE 1`.
Any code you write there will run whenever you click the "exercise 1" button.

Fill in code so that if the number in the box (stored for you in the variable
`data`) is greater than 100, clicking gives you a popup saying "Too big".


#### Exercise 2

Open up the JavaScript console using Ctrl+Shift+J. Type the
following lines in one by one, and explain the results to your partner.

```
> var mylist = [4, 5, 'hello'];
> mylist[0];
> mylist[2];
> mylist[3];
> mylist[-1];
```
How are JavaScript lists different from Python lists?


#### Exercise 3

Find the part of `script.js` that says `BEGINNING OF EXERCISE 3`.
Any code you write there will run whenver you click the "exercise 3" button.

In that section, add code to the function call `myFunction` that takes in a string.
If the string starts with "meet", then you should return the string. Otherwise,
you should return "meet". For example,

```
> myFunction('meet is awesome!')
'meet is awesome'
> myFunction('I like schnitzel')
'meet'
```

*Hint*: you can use `.startsWith(...)` to see if a string starts with another
string.
