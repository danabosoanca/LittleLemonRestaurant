var offer = document.getElementById("offer");

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay(); // fixed
console.log(day);

if (day == 0) {
  // sunday - italian day
  offerDay(
    "25% Off",
    "",
    "Italian Day - Today (3pm - 5pm)",
    "../images/italian_food.jpg",
    "black"
  );
} else if (day == 1) {
  // monday - greek day
  offerDay(
    "30% Off",
    "",
    "Greek Day - Today (7pm - 10pm)",
    "../images/greek_food3.jpg",
    "black"
  );
} else if (day == 2) {
  // tuesday - turkish day
  offerDay(
    "35% Off",
    "",
    "Turkish Day - Today (6pm - 10pm)",
    "../images/turkish_food2.jpg",
    "#F0C808"
  );
} else if (day == 3) {
  // wednesday - dessert
  offerDay(
    "50% Off",
    "Dessert (2pm - 6pm)",
    "",
    "../images/dessert.jpg",
    "white"
  );
} else if (day == 4) {
  // thursday - italian day
  offerDay(
    "10% Off Pizza",
    "",
    "Today (8pm - 10pm)",
    "../images/pizza2.jpg",
    "white"
  );
} else if (day == 5) {
  // friday - greek day
  offerDay(
    "15% Off Gyros",
    "",
    "Today (2pm - 4pm)",
    "../images/gyros2.jpg",
    "white"
  );
} else if (day == 6) {
  // saturday - turkish day
  offerDay(
    "20% Off Baklava",
    "",
    "Today (3pm - 10pm)",
    "../images/baklava.jpg",
    "#1B065E"
  );
}

function offerDay(heading1Text, heading2Text, paragraphText1, url, color) {
  //offer1.style["display"] = "none";
  const heading1 = document.createElement("h1");
  const headingText1 = document.createTextNode(heading1Text);
  heading1.appendChild(headingText1);
  offer.appendChild(heading1);

  const heading2 = document.createElement("h1");
  const headingText2 = document.createTextNode(heading2Text);
  heading2.appendChild(headingText2);
  offer.appendChild(heading2);

  const paragraph = document.createElement("p");
  const paragraphText = document.createTextNode(paragraphText1);
  paragraph.appendChild(paragraphText);
  offer.appendChild(paragraph);

  const link = document.createElement("a");
  const linkText = document.createTextNode("Book now");
  link.appendChild(linkText);
  link.title = "Book now";
  link.href = "../book.html";
  offer.appendChild(link);

  designArticle(offer, url);

  designHeading(heading1, color);

  designHeading(heading2, color);
  heading2.style["marginTop"] = "1vh";

  designParagraph(paragraph, color);
  if (window.innerWidth <= 850) {
    designButtonForMobile(link);
  } else {
    designButton(link);
  }
}

function designArticle(offer, url) {
  offer.style["display"] = "block";
  offer.style["backgroundImage"] = "url(" + url + ")";
  offer.style["objectFit"] = "cover";
  offer.style["borderRadius"] = "20px";
  offer.style["width"] = "100%";
  offer.style["height"] = "20lh";
  offer.style["backgroundRepeat"] = "no-repeat";
  offer.style["marginBottom"] = "25px";
}

function designParagraph(paragraph, color) {
  paragraph.style["color"] = color;
  paragraph.style["marginTop"] = "2vh";
  paragraph.style["marginLeft"] = "1vw";
  paragraph.style["marginBottom"] = "2vh";
  paragraph.style["fontWeight"] = "600";
}

function designHeading(heading, color) {
  heading.style["color"] = color;
  heading.style["marginBottom"] = "1vh";
  heading.style["marginLeft"] = "1vw";
}

function designButton(link) {
  link.style["background-color"] = "#F0C808";
  link.style["fontSize"] = "16px";
  link.style["border"] = "none";
  link.style["marginLeft"] = "8vw";
  link.style["paddingLeft"] = "6px";
  link.style["paddingRight"] = "6px";
  link.style["paddingTop"] = "10px";
  link.style["paddingBottom"] = "10px";
  link.style["textDecoration"] = "none";
  link.style["fontWeight"] = "900";
  link.style["marginTop"] = "2vh";
}

function designButtonForMobile(link) {
  link.style["background-color"] = "#F0C808";
  link.style["fontSize"] = "16px";
  link.style["border"] = "none";
  link.style["marginLeft"] = "8vw";
  link.style["paddingLeft"] = "6px";
  link.style["paddingRight"] = "6px";
  link.style["paddingTop"] = "10px";
  link.style["paddingBottom"] = "10px";
  link.style["textDecoration"] = "none";
  link.style["fontWeight"] = "900";
  link.style["marginTop"] = "10vh";
}
