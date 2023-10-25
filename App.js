//*Creating Nested tags*//
//First we create parent div
const parent = React.createElement(
  //it takes three parameters to take the dom element i.e. heading
  "div", //Element Type
  { id: "parent" }, //Here inside curly braces we can give attributes to out tag. These are the props
  React.createElement(
    //As a child we are creating a heading tag inside the parent div tag.
    "h1",
    { id: "child_heading", xyz: "xyz" },
    "This heading is created by React" //Children (in the props itelf)
  )
);

//We can also give array of elements if we want to create siblings like below code.

//Comment line from 3-13 //For creating a single child tag inside parent tag
//uncomment line 18-36 //For creating siblings, we pass array of children

// const parent = React.createElement(
//   //it takes three parameters to take the dom element i.e. heading
//   "div", //Element Type
//   { id: "parent" }, //Here inside curly braces we can give attributes to out tag. These are the props
//   [
//     React.createElement(
//       //As a child we are creating a heading tag inside the parent div tag.
//       "h1",
//       { id: "child1_heading" },
//       "This 1st heading is created by React" //Children (in the props itelf)
//     ),
//     React.createElement(
//       //As a child we are creating a heading tag inside the parent div tag.
//       "h1",
//       { id: "child2_heading", xyz: "xyz" },
//       "This 2nd heading is created by React" //Children (in the props itelf)
//     ),
//   ]
// );

console.log(parent); //This is the object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //It converts the object into the actual tag.

//Props: attribute that we pass in curly braces while creating element and the children(content) that we want inside teh element.
//How behind the scenes work:
//The object of type heading gets created
//root.render method will take that object and convert it into a html tag and put it on to the browser window.
