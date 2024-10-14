import { TextStyle } from "react-native";
import { hdp, wdp } from "../utils/utility";

const Contacts = [
    {
      country: "KSA",
      locations: [
        {
          city: "Jeddah",
          tel: "+966 12 627 8222",
          fax: "+966 12 627 8722",
        },
        {
          city: "Makkah/Taif",
          tel: "+966 12 541 1206",
          fax: "+966 12 532 1675",
        },
        {
          city: "Riyadh",
          tel: "+966 11 292 8200",
          fax: "+966 11 456 6627",
        },
        {
          city: "Qassim / Buraidah",
          tel: "+966 16 382 3946",
          fax: "+966 16 385 2186",
        },
        {
          city: "Skakah / Qurayyat",
          tel: "+966 14 626 3904",
          fax: "+966 14 626 3905",
        },
        {
          city: "Tabuk",
          tel: "+966 14 423 5203",
          fax: "+966 14 423 5203",
        },
        {
          city: "Khamis Mushayt",
          tel: "+966 17 237 5929",
          fax: "+966 17 237 8783",
        },
        {
          city: "Gizan",
          tel: "+966 17 321 6660",
          fax: "+966 17 321 0665",
        },
        {
          city: "Madinah",
          tel: "+966 14 842 1095",
          fax: "+966 14 842 1090",
        },
        {
          city: "Yanbu",
          tel: "+966 14 390 1499",
          fax: "+966 14 322 7101",
        },
        {
          city: "Dammam",
          tel: "+966 13 859 0097",
          fax: "+966 13 857 8177",
        },
        {
          city: "Jubail",
          tel: "+966 13 361 4390",
          fax: "+966 13 362 4499",
        },
        {
          city: "Hofuf",
          tel: "+966 13 530 1474",
          fax: "+966 13 530 7144",
        },
      ],
    },
    {
      country: "UAE",
      locations: [
        {
          city: "Dubai - Al Rashidiyah",
          tel: "+971 4 2591 773",
          fax: "+971 4 2591 774",
        },
        {
          city: "Abu Dhabi - Musaffah",
          tel: "+971 2 552 3393",
          fax: "+971 2 552 5499",
        },
      ],
    },
    {
      country: "JORDAN",
      locations: [
        {
          city: "Amman",
          tel: "+962 6 556 3030",
          fax: "+962 6 554 7911",
        },
        {
          city: "Aqaba",
          tel: "+962 6 556 3030",
          fax: "+962 6 554 7911",
        },
      ],
    },
    {
      country: "OMAN",
      locations: [
        {
          city: "Muscat",
          tel: "+968 24 591 006",
          fax: "+968 24 597 006",
        },
      ],
    },
    {
      country: "EGYPT",
      locations: [
        {
          city: "Cairo 6th of October City",
          tel: "+20 2 3820 6477",
          fax: "+20 2 3820 6036",
        },
      ],
    },
    {
      country: "KUWAIT",
      locations: [
        {
          city: "Kuwait City",
          tel: "+965 2 4924 937",
          fax: "+965 2 4924 938",
        },
      ],
    },
    {
      country: "BAHRAIN",
      locations: [
        {
          city: "Manama",
          tel: "+973 17 874 897",
          fax: "+973 17 789 470",
        },
      ],
    },
    {
      country: "LEBANON",
      locations: [
        {
          city: "Beirut",
          tel: "+961 1 858 277",
          fax: "+961 1 858 276",
        },
      ],
    },
    {
      country: "PAKISTAN",
      locations: [
        {
          city: "Lahore - Punjab",
          tel: "+92 42 32301578",
          fax: "+92 42 32301578",
        },
      ],
    },
  ];

  const Colors = {
    primary: "#0093d0",
    secondary: "#D3D3D3",
    white: "#FFFFFF",
    erieBlack: "#1C1C1E",
    darkSilver: "#6D6D6D",
    phillipineGrey: "#919194",
    whiteTint: "#F2F2F7",
    black: "#000000",
    spanishGray: "#949192",
    antiFlashWhite: "#F2F2F7",
    aztecGold: "#C6A055",
    lineSeparator: "#b5b5b7",
    lightGrey: "#3C3C43",
    tuftsBlue: "#3E94E1",
    lightSkyBlue: "#8DC5FF",
    brightGray: "#ECECEC",
    myrtleGreen: "#386D67",
    tintGrey: "#D9D9D9",
    yellow: "#FFE70E",
    red: "#e31b23",
    yaleBlue: "#1B5690",
    urlLink: "#0000EE",
    green: "#075936",
    mante:'#959CA1'
  };

  const getFonts = (fontFamily: string, fontSize: number): TextStyle => ({
    fontFamily,
    fontSize
  });
  
  const Fonts = {
    //bold
    poppinsTextBold16: getFonts("Poppins-Bold", 16),
    poppinsTextBold18: getFonts("Poppins-Bold", 18),
    poppinsTextBold12: getFonts("Poppins-Bold", 12),
    poppinsTextBold14: getFonts("Poppins-Bold", 14),
    poppinsTextBold10: getFonts("Poppins-Bold", 10),
    poppinsTextBold20: getFonts("Poppins-Bold", 20),
    poppinsTextBold21: getFonts("Poppins-Bold", 21),
    poppinsTextBold22: getFonts("Poppins-Bold", 22),
    poppinsTextBold23: getFonts("Poppins-Bold", 23),
    poppinsTextBold24: getFonts("Poppins-Bold", 24),
    poppinsTextBold25: getFonts("Poppins-Bold", 25),
    poppinsTextBold26: getFonts("Poppins-Bold", 26),
    poppinsTextBold27: getFonts("Poppins-Bold", 27),
    poppinsTextBold28: getFonts("Poppins-Bold", 28),
    poppinsTextBold38: getFonts("Poppins-Bold", 38),
    //regular
    poppinsTextRegular10: getFonts("Poppins-Regular", 10),
    poppinsTextRegular12: getFonts("Poppins-Regular", 12),
    poppinsTextRegular16: getFonts("Poppins-Regular", 16),
    poppinsTextRegular14: getFonts("Poppins-Regular", 14),
    poppinsTextRegular18: getFonts("Poppins-Regular", 18),
    poppinsTextRegular24: getFonts("Poppins-Regular", 24),
    //medium
    poppinsTextMedium8: getFonts("Poppins-Medium", 8),
    poppinsTextMedium10: getFonts("Poppins-Medium", 10),
    poppinsTextMedium12: getFonts("Poppins-Medium", 12),
    poppinsTextMedium16: getFonts("Poppins-Medium", 16),
    poppinsTextMedium18: getFonts("Poppins-Medium", 18),
    poppinsTextMedium14: getFonts("Poppins-Medium", 14),
    //semi bold
  
    poppinsTextSemibold8: getFonts("Poppins-SemiBold", 8),
    poppinsTextSemibold10: getFonts("Poppins-SemiBold", 10),
    poppinsTextSemibold12: getFonts("Poppins-SemiBold", 12),
    poppinsTextSemibold14: getFonts("Poppins-SemiBold", 14),
    poppinsTextSemibold16: getFonts("Poppins-SemiBold", 16),
    poppinsTextSemibold18: getFonts("Poppins-SemiBold", 18),
    poppinsTextSemibold20: getFonts("Poppins-SemiBold", 20),
    poppinsTextSemibold22: getFonts("Poppins-SemiBold", 22),
    poppinsTextSemibold26: getFonts("Poppins-SemiBold", 26),
  };
  const Spacing = {
    app_horizontal: wdp(3),
    textinput_horizontal: Math.round(wdp(4)),
    textinput_vertical: hdp(2.5),
    home_item_card_horizontal: wdp(1),
    vertical_section: hdp(1.5),
    item_padding_horizontal: wdp(3),
    appVertical: hdp(1.35),
  };
  const Size = {
    nexus_button_height: Math.round(hdp(6.5)),
    nexus_textinput_height: Math.round(hdp(6.3)),
    global_icon_size: wdp(4),
    cancel_icon_size: Math.round(wdp(7)),
    header_height: Math.round(hdp(8)),
    header_icon_size: wdp(5.5),
    icon_placeholder_size: Math.round(wdp(7)),
    home_item_card_width: wdp(87),
    otp_input_size: hdp(5),
    tab_bar_height: hdp(7),
    announcement_card_width: wdp(100) - Spacing.app_horizontal * 2,
    forward_icon_size: wdp(8),
    video_container_width: wdp(100) - (Spacing.app_horizontal * 2),
    pauseBtn: wdp(17),
    universal_padding_vertical: hdp(5),
    stats_container_width: wdp(80),
    stats_container_height: hdp(25),
    stats_row_height: hdp(25) / 5,
    media_control_button: wdp(20),
    notification_card_height: 80
  };

  const regex = {
    emailAddress: new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ),
    // password: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
    password: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
    // phoneNumber:/^[6-9]\d{9}$/,
    mobileNumber: /^(\+91[\\-\s]?)?[0]?(91)?[6789]\d{9}$/,
    fullName:  /^[a-zA-Z][a-zA-Z ]*$/,
    // eslint-disable-next-line no-useless-escape
    // userName: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)\.[a-z]{2,5}(:[0-9]{1,5})?(\/.)?$/,
    specialNotAccept: /[\s#.,-]/,
  };

  // Define the type for each location
type Location = {
  name: string;
  lat: string;
  lng: string;
};

// Define the type for the `results` object
type LocationsData = {
  [key: string]: Location;
};

  const Locations:{ results: LocationsData } = {
    "results": {
      "0": { "name": "Al-Thaalba, Jeddah", "lat": "21.468409", "lng": "39.184521" },
      "1": { "name": "King Fahd, Makkah", "lat": "21.3962443", "lng": "39.7196898" },
      "2": { "name": "Al Madinah Al Munawwarah", "lat": "24.3032833", "lng": "39.3920718" },
      "3": { "name": "Yanbu", "lat": "24.070837", "lng": "38.105825" },
      "4": { "name": "Jazan", "lat": "16.841900", "lng": "42.638790" },
      "5": { "name": "Buraydah", "lat": "26.427663", "lng": "43.872035" },
      "6": { "name": "Dammam", "lat": "26.419740", "lng": "50.167648" },
      "7": { "name": "Al-Ahsa Metropolitan Area", "lat": "25.524806", "lng": "49.63208" },
      "8": { "name": "Shuwaikh Industrial, Kuwait", "lat": "29.327834", "lng": "47.947493" },
      "9": { "name": "Dubai", "lat": "25.2167617", "lng": "55.3723168" },
      "10": { "name": "Abu Dhabi", "lat": "24.347516", "lng": "54.4789779" },
      "11": { "name": "Muscat, Oman", "lat": "23.587954", "lng": "58.369983" },
      "12": { "name": "Stuttgart, Germany", "lat": "48.781224", "lng": "9.179617" },
      "13": { "name": "Jnah, Beirut", "lat": "33.865381", "lng": "35.489178" },
      "14": { "name": "Manama, Bahrain", "lat": "26.231514", "lng": "50.580646" },
      "15": { "name": "Amman, Jordan", "lat": "31.981778", "lng": "35.847194" },
      "16": { "name": "Al Giza", "lat": "29.940194", "lng": "30.858833" },
      "17": { "name": "Karachi City", "lat": "24.827651", "lng": "67.025241" }
    }
  };


  export {
    Contacts,
    Size,
    Spacing,
    Fonts,
    Colors,
    Locations,
    regex
  }
  