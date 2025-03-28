export async function loadADefRealSite(url: string): Promise<string> {
    const delay = (Math.random() * 8 + 2) * 1000;
    console.log(`loading from "${url}"...`);

    setTimeout(() => console.log(`don't worry, we are fetching a totally real .HTML file from "${url}". :)`), delay / 3);
    return new Promise<string>((res, rej) => setTimeout(() => Math.random() >= 0.5 ? rej("Oh no! Something went wrong showing that sexy website!!!") : res("<h1>Welcome to the very cool, super duper website!</h1>"), delay));
}