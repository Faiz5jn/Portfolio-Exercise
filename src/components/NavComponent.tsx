import "../styles/nav.css"

export interface NavProps {
    graphic: string;
    label: string;
    page?: string
    onClick?: () => void;
}

function NavComponent({graphic, label, page, onClick}: NavProps) {
  return (
    <div className="nav-box" onClick={onClick}>
        <img src={graphic} alt={page} className="nav-graphic"/>
        <p className="nav-label"><b>{label}</b></p>
    </div>
  )
}

export default NavComponent