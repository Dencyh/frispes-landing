import "./assets/styles/main.scss";

import * as cities from "./components/fetchCities.js";
import * as gallery from "./components/gallery.js";
import * as scrollbar from "./components/scrollbar.js";

cities.fetchCities();

gallery.scroll();

scrollbar.scrollbar();
scrollbar.scrollControls();
