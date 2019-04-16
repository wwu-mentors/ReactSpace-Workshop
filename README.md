# ReactSpace Workshop

By Caleb Ouellette & Haley Beavers


### What we are doing today
We will be giving a brief overview of web development and React. Next, we will be using React to create a social network website called ReactSpace. 

# Why React?

#### [People love it!](https://insights.stackoverflow.com/survey/2019?utm_source=so-owned&utm_medium=blog&utm_campaign=dev-survey-2019&utm_content=launch-blog#technology-_-most-loved-dreaded-and-wanted-web-frameworks)

#### [Its really popular!](https://npm-stat.com/charts.html?package=react&package=vue&package=%40angular%2Fcore&from=2014-12-12&to=2018-12-12)


# The Web Basics

## Javascript
JavaScript! JavaScript is great! JavaScript is the only language that can run inside the browser.


Here are some examples to get you started. JavaScript does not have types (like python). JavaScript has curly braces and semicolons like Java and C. Here is a simple function call with a variable declaration.


```javascript
let x = Math.abs(3); // JavaScript
```
```python
x = abs(3) # Python
```
```java
Integer x = Math.abs(3); // Java
```
Lets also look at how classes are created in JavaScript.
```javascript
// JavaScript
class MyFirstClass extends AnotherClass{
  // MyFirstClass inherits AnotherClass
  constructor(){
    super();
    this.name = "Caleb";
  }

  hello(){
    print("Hello " + this.name); //prints "Hello Caleb"
  }
}
```
Here is the same code in Python.
```python
# Python
class MyFirstClass(AnotherClass):
  # MyFirstClass inherits AnotherClass
  def __init__(self):
    AnotherClass.__init__(self)
    self.name = "Caleb"

  def hello(self):
    #prints "Hello Caleb"
    print("Hello " + self.name) 
```
And in Java.
```java
// Java
class MyFirstClass extends AnotherClass{ 
// MyFirstClass inherits AnotherClass
  public String name;

  public void MyFirstClass(){
    super();
    this.name = "Caleb";
  }
  
  public void hello() 
  { 
    //prints "Hello Caleb" 
    System.out.print("Hello " + this.name);  
  }  
} 

```


## HTML & CSS

HTML is a language that describes the structure of a layout. What order things are laid out in and what elements contain other elements. It is an XML style language and is the foundation of the internet. 

```html
<div> 
  <span>Hello World!</span>
  <p> This is a paragraph of text as an example </p>
</div>
```

CSS makes things look pretty. It deals with font size, colors, shadows, etc. 

```css
.my-class{
  font-size: 1.2em;
  color: blue;
}
```

In order to link CSS to HTML, we will use the `className` property in React. This will apply the CSS class to that HTML element.

```html
<div> 
  <span className="my-class" >Hello World!</span>
  <p> This is a paragraph of text!</p>
</div>
```

# React
React is a really awesome way to manipulate HTML and CSS to build websites. React is considered a Front-end JavaScript Framework.

## [Click here to get started](https://codesandbox.io/s/8n03nw0y2)

The file we will work in today is `App.js`. Don't worry about any other file. Today we will only work in `App.js`.

If you found this file go ahead and put your first name into the NAME variable.

```javascript
const NAME = "Your name here!"; // <-- Put your name here!
```

# Part 1 Working with Components

Components are the lego pieces of a React app. In this workshop, we will both build React components and combine them to make an app.

Let's look at our first component. 
```javascript
export class App extends React.Component {

  render() {
    return (
      <div className="App">
        Hello World!
      </div>
    );
  }
}
```
The App class is a React component because it extends `React.Component` . 

In every React Component, there needs to be a `render` method. This returns HTML that will be rendered when this component is used. When working with React we can use actually just return HTML in our render function. This is really handy and makes it easy to dynamically put HTML on the page. This ability to return HTML is a feature of JSX, which is an extension of Javascript. Go ahead and play around with what is returned. 

You can use the `{}` to execute code inside the HTML. 
Try putting the NAME variable into your HTML like this:

```javascript
render() {
  return (
    <div className="App">
      Hello World! {NAME}
    </div>
  );
}
```
You can use this to put in simple strings to your HTML. 

Now let's look at adding some other stuff. I have already built a component for you to toy with. Its called `TopBar` and its at the bottom of `App.js` file.

It looks like this
```javascript
class TopBar extends React.Component {
  render() {
    return (
      <header className="TopBar">
        <img src="./logo.svg" alt="ReactSpace" />
        <h4> ReactSpace</h4>
        <span> Name: {NAME}</span>
      </header>
    )
  }
}
```

This component is built just like our `App` component. Let's add it to `App` so we can see it render on the page.

Add `TopBar` to the `App.render` method like this:
```javascript
export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TopBar />
        Hello World! {NAME}
      </div>
    );
  }
}
```

Let's take a second and think about what is going on. 

React is rendering `App` to the page using the `App.render` method.
`App` is rendering `TopBar` to the page using `TopBar`'s rendering method.

This is the core of how React apps work. Each Component will render on the page, and optionally call other components to be rendered to the page. This creates a component tree. The App Component is the Root of this tree.

TODO put image here of component tree

Try playing around with this by adding another `Topbar` to the page.

# Part 2 Building Components

## [Here is a working Version of what we have so far.](https://codesandbox.io/s/2zx84o46qj)

Our goal in this workshop is to create a social media website. Every social media site needs a way to create a post. So let's build a React component that can create a post.

Scroll to the bottom of App.js and create a class called `CreatePost` that extends `React.Component`.

The component will need a `render` method, so go ahead and that to.

```javascript
class CreatePost extends React.Component {
  render() {
    return (
      <div className="Container">
        Create A post!
      </div>
    )
  }
}
```
Now to make sure everything is working lets add this to our `App` component.

```javascript
export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TopBar />
        <CreatePost />
        Hello World! {NAME}
      </div>
    );
  }
}
```

The first thing we need is a way for the user to enter some post text. For this, we will need the `input` component. You can add it the same way you added `TopBar`. Add it inside the div like this:

```javascript
class CreatePost extends React.Component {
  render() {
    return (
      <div className="Container">
        <input />
        Create A post!
      </div>
    )
  }
}
```

Great now we got an input, but right now that text isn't really going anywhere. We need a way to get ahold of the text so that we can send our post to the ReactSpace servers. 


To do this we will need to introduce a few concepts. First is the concept of `state`. The `React.Component` Class has a property call `state`. You can add anything to `state`. The cool thing is that every time you change `state`, the component will re-render. This allows us to change the UI as the `state` inside our app changes. 

That's a lot to take in, so let's see an example.

```javascript
class CreatePost extends React.Component {

  state = {
    postText: "Some Text!",
  }

  render() {
    return (
      <div className="Container">
        <input
          value={this.state.postText}
          onChange={(event) => { this.setState({ postText: event.target.value }) }} />
        Create A post!
      </div>
    )
  }
}
```

I added 3 things to our code

1. `state` property. Adding this to the class will set its value when the class is constructed.

2. On input, I added `value` prop equal to our `state.postText`. This will set the input's value to our `state.postText`.

3. Also on input, I added an `onChange` prop. Every time you type in the input `onChange` is called. We then use `this.setState()` to update the state.

> Always use this.setState() to modify state. This ensures the component always re-renders correctly.

Optional: 
To see this working you can add the following inside render.
```javascript 
{this.state.postText}
```
Then type and watch the text change.

We now have captured the user's input into the `state` of our component. The last thing we need to do is send this important post the ReactSpace servers. To do this we need to add a button. We will also need a `createPost` method.

The button Works how you would expect. The `onClick` prop calls `this.createPost` on click.

The `createPost` method will send a post to the ReactSpace servers. This will also take in your name. After it sends the post, it set postText back to empty.

And yes the ReactSpace Servers are real, anything you send them will be read by people, so don't say anything bad mmmmk?

```javascript
class CreatePost extends React.Component {

  state = {
      postText: "",
  }  

  createPost = () => {
    RS.makePost(NAME, this.state.postText);
    this.setState({
      postText: ""
    });
  }

  render() {
    return (
      <div className="Container">
        <input
          placeholder="Enter Post Text" 
          value={this.state.postText}
          onChange={(event) => { this.setState({ postText: event.target.value }) }} />
        <button onClick={this.createPost} >Create Post!</button>
      </div>
    )
  }
}
```

# Part 3 Putting it all together.

## [Here is a working Version of what we have so far.](https://codesandbox.io/s/oj2yp61yp6)

We now have part of a social network! We can send stuff to the ReactSpace servers, but now we need to get those posts back so we can see what everyone is up to.

To do this we will need to do a few things. Step 1 will be to get posts from ReactSpace servers. We will then need to render each post to the page. 

To keep everything lets build another React Component. Let's call it `PostList`.

```javascript
class PostList extends React.Component {

  render() {
    return (
      <div>
        This is a the post list!
      </div>
    )
  }
}
```

Go ahead and add it to the `App.render`  method.

To get Posts from the server we will need to a React Lifecycle method. Add a method called `compmonentDidMount`. This is called every time a component is rendered to the page. In this method, we are going to use the ReactSpace client to subscribe to new posts.

RS.subscribeToPostList will call the function it is given every time a new post is made.

```javascript
class PostList extends React.Component {


  componentDidMount() {
    RS.subscribeToPostList((posts) => {
      //TODO change state when we get a new post
    });
  }


  render() {
    return (
      <div>
        This is a the post list!
      </div>
    )
  }
}
```

Now we will need to add a `postlist` to state. We also want to update the `state.posts` every time a new post is created. 

Recall that every time state is changed the component will re-render. This means our page will update every time a new post is created.

The `RS.subscribeToPostList` method will return a list of posts that look like this 

```javasript
[{
  "id": 1
  "content": "Post content!"
  "name" "Caleb"
},
{
  "id": 2
  "content": "Post content 2!"
  "user" "Haley"
}]
```


```javascript
class PostList extends React.Component {
  state = {
    posts: []
  }


  componentDidMount() {
    RS.subscribeToPostList((posts) => {
      this.setState({
        posts: posts
      });
    });
  }


  render() {
    return (
      <div>
        This is a the post list!
      </div>
    )
  }
}
```

Finally, we need to render each post in the render method we can use the `Array.map` function to generate a list of HTML elements. 

We also need to add a key property when working with a list. This property helps React manage the list and improve performance.

```javascript

class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    RS.subscribeToPostList((posts) => {
      this.setState({
        posts: posts
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div key={post.id}> {post.content} </div>
        ))}
      </div>
    )
  }
}
```

We can add a little more structure and CSS classes to make this post look a little better.

```javascript

class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    RS.subscribeToPostList((posts) => {
      this.setState({
        posts: posts
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div className="Container">
            <div className="UserName" >{post.user}</div>
            <div className="PostContent" >{post.content}</div>
          </div>
        ))}
      </div>
    )
  }
}
```

# We did it!

[Link to final version](https://codesandbox.io/s/646n7685yw)



# TODO
1. Create Diagrams
