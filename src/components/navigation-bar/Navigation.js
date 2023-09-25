import "./Navigation.css";

const Navigation = (props) => {

    const showHide = () => {
        if (props.value==false) {
            props.show(true);
            document.getElementById("line1").style.rotate = "50deg";
            document.getElementById("line1").style.marginTop = "30%";
            document.getElementById("line2").style.opacity = 0;
            document.getElementById("line3").style.rotate = "-50deg";
            document.getElementById("line3").style.marginTop = "-30%";
        }
        else {
            props.show(false);
            document.getElementById("line1").style.rotate = "0deg";
            document.getElementById("line1").style.marginTop = "6%";
            document.getElementById("line2").style.opacity = 1;
            document.getElementById("line3").style.rotate = "0deg";
            document.getElementById("line3").style.marginTop = "6%";
        }
    }

    return (
        <nav id="nav-bar">
            <img src=""></img>
            <button id="hamburger-icon" onClick={() => {
                showHide();
            }}>
                <span className="lines" id="line1"></span>
                <span className="lines" id="line2"></span>
                <span className="lines" id="line3"></span>
            </button>
        </nav>
    );
}
export default Navigation;