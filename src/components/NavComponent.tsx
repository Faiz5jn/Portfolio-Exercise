import "../styles/nav.css"

export interface NavProps {
    graphic: string;
    label: string;
}

function NavComponent({graphic, label}: NavProps) {
  return (
    <div className="nav-box">
        <img src={graphic} alt={label} className="nav-graphic"/>
        <p className="nav-label"><b>{label}</b></p>
        <p className="nav-button">
            <b><u>Learn More</u></b>
        </p>
    </div>
  )
}

export default NavComponent