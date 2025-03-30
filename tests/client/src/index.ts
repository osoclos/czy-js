import czy from "czy-js";
import { loadADefRealSite, smallRandomNum } from "../../shared";

import "./style.css";

for (const _ of Array(100)) {
    const { success, data } = czy(smallRandomNum);
    if (!success) {
        console.error("1: WHAT??! IT WAS UNSUCCESSFUL??!!!! >:(");
        continue;
    }

    console.log("1: YIPEEEEEEEEEEEEE!!!! SUCCESSFUL!!!", "I GOT: ", data);
}

for (const _ of Array(100)) {
    const [data, err] = czy.dataErr(smallRandomNum);
    if (err) {
        console.error("2: WHAT??! IT WAS UNSUCCESSFUL??!!!! >:(");
        continue;
    }

    console.log("2: YIPEEEEEEEEEEEEE!!!! SUCCESSFUL!!!", "I GOT: ", data);
}

for (const _ of Array(100)) {
    const data = czy(smallRandomNum).resolve();
    console.log("3: YIPEEEEEEEEEEEEE!!!! SUCCESSFUL!!!", "I GOT: ", data);
}

for (const _ of Array(10)) {
    const [err, data] = await czy(loadADefRealSite("https://super.duper-sexy.website/"));
    if (err) {
        console.error("Why can't I visit the website???? :(");
        continue;
    }

    console.log(data);
}