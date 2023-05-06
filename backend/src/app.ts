import express from 'express';
import mjml2html from 'mjml';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import { join } from 'path';

dotenv.config();

const savedFilePath = join(__dirname, process.env.SAVED_FILE_PATH);
const publicIndex = join(__dirname, "..", "public", "index.html");

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.static("public"));
app.use(express.json());
const port = process.env.PORT;

app.post('/internal-api/convert', (req, res) => {
    const mjmlCode = req.body.content;
    const fileName = req.body.name;
    try {
        fs.writeFileSync(join(savedFilePath, fileName), mjmlCode);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
    res.send(transformToHtml(mjmlCode));
});


app.get("/", (req, res) => {
    res.sendFile(publicIndex);
});

app.listen(port, () => {
    return console.log("Listening", port);
});


function transformToHtml(mjmlCode: string): string{
    return mjml2html(mjmlCode).html;
}
