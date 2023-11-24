import { useState } from "react";

const Country = (props) => {

    const countries = ["---------- Select ----------","United Arab Emirates (UAE)","Argentina (ARG)","Austria (AUT)","Australia (AUS)","Belgium (BEL)","Bulgaria (BGR)","Brazil (BRA)","Canada (CAN)","Switzerland (CHE)","China (CHN)","Colombia (COL)","Cuba (CUB)","Czech Republic (CZE)","Germany (DEU)","Egypt (EGY)","France (FRA)","England (GBR)","Greece (GRC)","Hong Kong (HKG)","Hungary (HUN)","Indonesia (IDN)","Ireland (IRL)","Israel (ISR)","India (IND)","Italy (ITA)","Japan (JPN)","Republic of Korea (KOR)","Lithuania (LTU)","Latvia (LVA)","Morocco (MAR)","Mexico (MEX)","Malaysia (MYS)","Nigeria (NGA)","Netherlands (NLD)","Norway (NOR)","New Zealand (NZL)","Philippines (PHL)","Poland (POL)","Portugal (PRT)","Romania (ROU)","Russia (RUS)","Saudi Arabia (SAU)","Sweden (SWE)","Singapore (SGP)","Slovenia (SVN)","Slovakia (SVK)","Thailand (THA)","Turkey (TUR)","Taiwan (TWN)","Ukraine (UKR)","United State of America (USA)","Venezuela (VEN)","South Africa (ZAF)"
    ];

    const countriesCode = ["", "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"
    ];

    const [choose, setChoose] = useState("");
    const [valid, setValid] = useState(true);
    let value;
    let code;

    const select = (e) => {
        if (e.target.value === "---------- Select ----------") {
            setValid(true);
            setChoose("");
            props.country("");
        }
        else {
            setChoose(e.target.value);
            setValid(false);
            props.country(e.target.value.slice(0,-6));
        }

    }
    for (let i = 1; i < countries.length; i++) {
        if (choose === countries[i]) {
            value = i;
        }
    };

    code = countriesCode[value];

    const hide = () => {
        if (code === undefined) {
            props.hide(true);
        }
        else {
            props.code(code);
            props.hide(false);
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[url('/src/images/earth.png')] bg-contain bg-no-repeat bg-center min-w-max min-h-screen">

            <div className="w-10/12 h-64 flex flex-col items-center justify-center rounded-lg px-2 py-4 shadow-[1px_1px_10px_0px_white] sm:w-8/12 sm:h-56 sm:py-0 md:w-8/12 md:h-54 lg:w-6/12 xl:w-5/12 2xl:w-4/12 3xl:w-3/12 4xl:w-3/12">

                <h2 className="text-2xl text-white mb-4">Select Your Country ?</h2>

                <select className="w-60 rounded-xl py-1 px-2 text-lg bg-transparent text-white outline-white outline-1" onChange={select}>
                    {countries.map((item, index) => {
                        return <option key={index} className="text-black text-center">{item}</option>
                    })}
                </select>

                {valid && <h4 className="mt-3 text-red-700 font-bold sm:mt-5 md:mt-7">* Please Select a Valid Country</h4>}

                <button className="w-28 rounded-lg text-white py-1 text-xl mt-5 shadow-[1px_1px_10px_0_black] hover:shadow-[1px_1px_10px_0_white] sm:mt-7 md:mt-8" onClick={hide}>Done</button>

            </div>
        </div>
    );
};

export default Country;