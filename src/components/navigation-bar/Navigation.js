import "./Navigation.css";

const Navigation = (props) => {

    const showHide = () => {
        if (props.click == false) {
            props.func(true);
            document.getElementById("line1").style.rotate = "50deg";
            document.getElementById("line1").style.marginTop = "30%";
            document.getElementById("line2").style.opacity = 0;
            document.getElementById("line3").style.rotate = "-50deg";
            document.getElementById("line3").style.marginTop = "-30%";
        }
        else {
            props.func(false);
            document.getElementById("line1").style.rotate = "0deg";
            document.getElementById("line1").style.marginTop = "6%";
            document.getElementById("line2").style.opacity = 1;
            document.getElementById("line3").style.rotate = "0deg";
            document.getElementById("line3").style.marginTop = "6%";
        }
    }

    const showCountry=()=>{
        props.show(true);
    }

    return (
        <nav id="nav-bar">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcW8zoDItzqViYNVJozeC__TYcszlrg3_67g&usqp=CAU" id="logo"></img>

            <button id="country-btn" onClick={showCountry}>
                <svg
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 00-2-2h-4v-3a2 2 0 002-2V7h1a2 2 0 002-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 01-1.67 4.873z" />
                </svg>
            </button>

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