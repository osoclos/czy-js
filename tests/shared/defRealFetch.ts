import { smallRandomNum } from "./smallRandomNum";

export async function defRealFetch(path: string): Promise<number> {
    const delay = (Math.random() * 8 + 2) * 1000;
    console.log(`fetching from "${path}"...`);

    setTimeout(() => console.log(`don't worry, we are getting definitely real data from "${path}". :)`), delay / 3);
    return new Promise<number>((res) => setTimeout(() => res(smallRandomNum()), delay));
}