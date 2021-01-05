const goodIcon = "./images/pdfs/good-icon.png";
const monoxideImage = "./images/pdfs/carbon-monoxide.png";

const tableArray = [
  {
    title: "Carbon Monoxide",
    icon: goodIcon,
    status: "GOOD",
    description: `You don't want carbon monoxide in your home.
                It's presence at levels above 6 ppm means there is a safety issue.
                Carbon monoxide (CO) is known as the "silent killer" and is a colorless,
                odorless, tasteless, nonirritating, poisonous gas produced by burning fuels.
                When levels are above 25 ppm, immediate action should be taken. CO can be
                found in low levels about 0.2 ppm in the atmosphere.`,
    header: "Potential Causes",
    content: {
      listItem1: "Cracked heat exchanger on furnace, leaking vent or chimney.",
      listItem2:
        " Inadequate or aging venting of combustion appliances (water heater, gas, stove or dryer).",
      listItem3:
        "Other sources of combustion in an attached garage (auto, gas generator).",
      listItem4: "Cigarette smoke in the home.",
    },
    ppm: "ppm",
    chartTitle: "Carbon Monoxide",
    range: "Acceptable Range",
    window: "Less than 6 ppm",
  },
];

const table = document.createElement("table").className("what-it-matters");
const tr = document.createElement("tr");
const td = document.createElement("td").className("summary");
const div = document.createElement("div");
const img = document.createElement("img");
const ul = document.createElement("ul");
const li = document.createElement("li");
const wrapper = document.getElementsByClassName("readings-wrapper");

const test = document.getElementById("test");
