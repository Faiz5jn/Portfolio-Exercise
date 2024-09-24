import { useNavigate } from "react-router-dom";
import ContactComponent, {ContactProps} from "../components/ContactComponent";
import NavComponent, {NavProps} from "../components/NavComponent";
import "../styles/landing.css"


let contactData = [
  {
    title: "Whatsapp:",
    details: "+61 234 567 890",
    icon: "https://img.icons8.com/color/48/000000/whatsapp.png"
  },
  {
    title: "Email:",
    details: "faizfanandi@email.com",
    icon: "https://img.icons8.com/color/48/000000/email.png"
  },
  {
    title: "Instagram:",
    details: "@instagram",
    icon: "https://img.icons8.com/color/48/000000/instagram.png"
  },
  {
    title: "GitHub:",
    details: "https://github.com/",
    icon: "https://img.icons8.com/color/48/000000/github.png"
  }
]

let navData = [
  {
    graphic: "https://img.icons8.com/?size=100&id=8GwnEk6qzFmi&format=png&color=12B886",
    label: "Web Design",
    page: "webdesign"
  },
  {
    graphic: "https://img.icons8.com/?size=100&id=bIzkj9TUyWuU&format=png&color=12B886",
    label: "Algorithm Programs",
    page: "algorithms"
  },
]

let navData2 = [
  {
    graphic: "https://img.icons8.com/?size=100&id=0PvyMNdcAPot&format=png&color=FD7E14",
    label: "Other Projects",
    page: "others"
  },
  {
    graphic: "https://img.icons8.com/?size=100&id=82464&format=png&color=FD7E14",
    label: "Personal Blog",
    page: "blog"
  }
]

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="header">
        <div className="header-text">
          <h1>Welcome!</h1>
          <h2>This is the personal webpage of:<br/><b>Muhammad Faiz Fanandi</b></h2>
        </div>
        <div className="header-blank">
        </div>
      </div>
      <div className="about">
        <div className="about-text">
          <h1>About Me</h1>
          <p>Hello there, my name is Muhammad Faiz Fanandi and I am currently studying full stack web development.
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
        </div>
        <div className="info-blank">
        </div>
      </div>
      <div className="info-container">
        {navData.map((item: NavProps) => {
          return (<NavComponent 
            graphic={item.graphic} 
            label={item.label}
            onClick={() =>
              navigate("/" + item.page)
            }
            />);
          })}
      </div>
      <div className="works">
        <div className="works-container">
          {navData2.map((item: NavProps) => {
            return (<NavComponent 
              graphic={item.graphic} 
              label={item.label}
              onClick={() =>
                navigate("/" + item.page)
              }
              />);
            })}
        </div>
      </div>
      <div className="footer">
        <p>2024 - Muhammad Faiz Fanandi</p>
      </div>
    </div>
  )
}

export default Landing