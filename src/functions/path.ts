import path from "path";

export const fromRoot = (...paths: string[]) => {
    return path.join(process.cwd(), ...paths);
};

export const fromView = (filename: string) => {
    if (filename.endsWith(".html")) {
        return fromRoot("views", filename);
    }

    return fromRoot('src/views', `${filename}.html`);
};