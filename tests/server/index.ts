import czy from "czy-js";
import { smallRandomNum, loadADefRealSite } from "../shared";

for (const _ of Array(100)) {
    const { success, data } = czy(smallRandomNum);
    if (!success) {
        console.error("WHAT??! IT WAS UNSUCCESSFUL??!!!! >:(");
        continue;
    }

    console.log("YIPEEEEEEEEEEEEE!!!! SUCCESSFUL!!!", "I GOT: ", data);
}

for (const _ of Array(10)) {
    const [err, data] = await czy(loadADefRealSite("https://super.duper-sexy.website/"));
    if (err) {
        console.error("Why can't I visit the website???? :(");
        continue;
    }

    console.log(data);
}