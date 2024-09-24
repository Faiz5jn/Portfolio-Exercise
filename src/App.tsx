import "./App.css"
import ContactComponent, {ContactProps} from "./components/ContactComponent";
import NavComponent, {NavProps} from "./components/NavComponent";


let contactData = [
  {
    title: "Whatsapp:",
    details: "+61 488 901 241",
    icon: "https://img.icons8.com/color/48/000000/whatsapp.png"
  },
  {
    title: "Email:",
    details: "fjnyuei7@gmail.com",
    icon: "https://img.icons8.com/color/48/000000/email.png"
  },
  {
    title: "Instagram:",
    details: "@fjnyuei",
    icon: "https://img.icons8.com/color/48/000000/instagram.png"
  },
  {
    title: "GitHub:",
    details: "https://github.com/Faiz5jn",
    icon: "https://img.icons8.com/color/48/000000/github.png"
  }
]

let navData = [
  {
    graphic: "https://img.icons8.com/?size=100&id=SCQVeCkY6ZWr&format=png&color=12B886",
    label: "Education"
  },
  {
    graphic: "https://img.icons8.com/?size=100&id=cr6sAKmahoTM&format=png&color=12B886",
    label: "Experiences"
  },
  {
    graphic: "https://img.icons8.com/?size=100&id=N1zuNYvg2yRS&format=png&color=12B886",
    label: "Skillsets"
  }
]

let navData2 = [
  {
    graphic: "https://img.icons8.com/?size=100&id=8GwnEk6qzFmi&format=png&color=FD7E14",
    label: "Web Design"
  },
  {
    graphic: "https://img.icons8.com/?size=100&id=bIzkj9TUyWuU&format=png&color=FD7E14",
    label: "Software Development"
  },
  {
    graphic: "https://img.icons8.com/?size=100&id=0PvyMNdcAPot&format=png&color=FD7E14",
    label: "Other Projects"
  }
]

function App() {
  return (
    <div className="body">
      <div className="header">
        <div className="header-text">
          <h1>Welcome!</h1>
          <h2>This is the personal webpage of<br/><b>Muhammad Faiz Fanandi</b></h2>
        </div>
        <div className="header-blank">
        </div>
      </div>
      <div className="about">
        <div className="about-text">
          <h1>About Me</h1>
          <p>Hello there! Let me reintroduce myself. My name is Muhammad Faiz Fanandi and I am currently studying to become a full stack web developer.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="contacts-container">
          <h2>Contact Me:</h2>
          {contactData.map((item: ContactProps) => {
            return (<ContactComponent title={item.title} details={item.details} icon={item.icon}/>);
          })}
        </div>
      </div>
      <div className="info">
        <div className="info-title">
          <h2>General Info:</h2>
        </div>
        <div className="info-blank">
        </div>
      </div>
      <div className="info-container">
        {navData.map((item: NavProps) => {
          return (<NavComponent graphic={item.graphic} label={item.label}/>);
          })}
      </div>
      <div className="works">
        <h2>Past Works:</h2>
        <div className="works-container">
          {navData2.map((item: NavProps) => {
            return (<NavComponent graphic={item.graphic} label={item.label}/>);
            })}
        </div>
      </div>
      <div className="footer">
        <p>2024 - Muhammad Faiz Fanandi</p>
      </div>
    </div>
  )
}

export default App