// initializes page
// processes event listeners from render.js and calls api.js functions
import { apiManager } from "./api.js"
import { renderManager } from "./render.js"

import "./styles.css";

console.log("*MODULE CHECK* from index.js");

const pageManager = function(){
    const defaultLocation = "london"
    
    const init = async function(){
        renderManager.init();
        const weatherInfo = await apiManager.getWeather(defaultLocation);
        renderManager.editWeather(weatherInfo);
    }

    const newForecast = async function(inputLocation){
        const weatherInfo = await apiManager.getWeather(inputLocation);
        renderManager.editWeather(weatherInfo);
    }

    return {init, newForecast};
}();

// TEMPORARILY attach to window object to test newForecast
window.pageManager = pageManager;

pageManager.init();

export {pageManager};