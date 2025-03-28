import czy from "czy-js";
import { defRealFetch } from "../../shared";

import "./style.css";

const [err, data] = await czy(defRealFetch("https://superduper.cool-web.site/"));
if (err) throw err;

data;