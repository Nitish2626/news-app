import { useState } from "react";
import "./Country.css";

const Country = (props) => {

    const countries = ["---------- Select ----------","United Arab Emirates (UAE)","Argentina (ARG)","Austria (AUT)","Australia (AUS)","Belgium (BEL)","Bulgaria (BGR)","Brazil (BRA)","Canada (CAN)","Switzerland (CHE)","China (CHN)","Colombia (COL)","Cuba (CUB)","Czech Republic (CZE)","Germany (DEU)","Egypt (EGY)","France (FRA)","England (GBR)","Greece (GRC)","Hong Kong (HKG)","Hungary (HUN)","Indonesia (IDN)","Ireland (IRL)","Israel (ISR)","India (IND)","Italy (ITA)","Japan (JPN)","Republic of Korea (KOR)","Lithuania (LTU)","Latvia (LVA)","Morocco (MAR)","Mexico (MEX)","Malaysia (MYS)","Nigeria (NGA)","Netherlands (NLD)","Norway (NOR)","New Zealand (NZL)","Philippines (PHL)","Poland (POL)","Portugal (PRT)","Romania (ROU)","Russia (RUS)","Saudi Arabia (SAU)","Sweden (SWE)","Singapore (SGP)","Slovenia (SVN)","Slovakia (SVK)","Thailand (THA)","Turkey (TUR)","Taiwan (TWN)","Ukraine (UKR)","United State of America (USA)","Venezuela (VEN)","South Africa (ZAF)"
    ];

    const countriesCode = ["", "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"
    ];

    const [choose, setChoose] = useState();
    const [valid, setValid] = useState(true);
    let value;
    let code;

    const select = (e) => {
        if (e.target.value == "---------- Select ----------") {
            setValid(true);
            setChoose("");
        }
        else {
            setChoose(e.target.value);
            setValid(false);
        }

    }
    for (let i = 1; i < countries.length; i++) {
        if (choose == countries[i]) {
            value = i;
        }
    };

    code = countriesCode[value];

    const hide = () => {
        if (code == undefined) {
            props.hide(true);
        }
        else {
            props.code(code);
            props.hide(false);
        }
    }

    return (
        <div id="country-div">
            <div id="country-con">
                <h2>Select Your Country ?</h2>
                <select onChange={select}>
                    {countries.map((item, index) => {
                        return <option key={index}>{item}</option>
                    })}
                </select>
                {valid && <p id="country-text">* Please Select a Valid Country</p>}
                <button onClick={hide}>Done</button>
            </div>
        </div>
    );
};

export default Country;