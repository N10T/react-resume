import logo from "./logo.svg";
import "./App.css";
import CV from "./views/CV";

const resume = {
  picture:
    "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80",
  works: [
    {
      title: "Ironhack",
      date: "20/10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
    {
      title: "Carrefour",
      date: "20/10/2003",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
    {
      title: "Google",
      date: "20/10/2002",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
  ],
  educations: [
    {
      title: "Ironhack",
      date: "20/10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
    {
      title: "Ironhack",
      date: "20/10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
    {
      title: "Ironhack",
      date: "20/10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
  ],
  hobbies: [
    {
      title: "Wakeboard",
    },
    {
      title: "Basketball",
    },
    {
      title: "Coding",
    },
    {
      title: "Dance",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <CV resume={resume} />
    </div>
  );
}

export default App;
