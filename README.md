# formy-import-test 
Just some code to replicate an issue im having with using the formsy-react library.

I get this (in the browser) when I try to import formsy-react

```
Uncaught TypeError: Cannot read property 'React' of undefined
```

I'm not entirely familiar with how to use the nodejs,
but running any server from the root of the directory will show the error in the debug console.

I just use a simple python server to get things going here.

```
python -m SimpleHTTPServer 9090
```

**Note**: If you comment out the **formsy-react** import, then the plain reactjs app will run just fine.

I also added the formsy-react sample code to make it easier to test (assuming one gets to the point where the formsy-react
import doesn't throw an error).
