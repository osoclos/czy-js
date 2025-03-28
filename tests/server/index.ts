import czy from "czy-js";
import { smallRandomNum, defRealFetch } from "../shared";

console.log(Array(100).fill(null).map(czy.bind(null, smallRandomNum)));
for (const _ of Array(100)) {
    const [err, data] = await czy(defRealFetch("https://superduper.cool-web.site/"));
    console.log(err, data);
}