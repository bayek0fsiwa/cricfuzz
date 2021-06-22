// import axios from "axios";

const matchUrl = "https://www.cricbuzz.com/live-cricket-scores/35607/ind-vs-nz-final-icc-world-test-championship-final-2021";
const baseUrl = "https://cricket-api.vercel.app/cri.php?url=" + matchUrl;

async function fetchscore() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    } catch (exception) {
        console.log("Error Fetching Score....")
    }
}
fetchscore();