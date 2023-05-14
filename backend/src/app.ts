import express from 'express';
import mjml2html from 'mjml';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import { join } from 'path';
import { randomUUID } from 'crypto';

dotenv.config();

const savedFilePath = join(__dirname, process.env.SAVED_FILE_PATH);
const templateFilePath = join(__dirname, process.env.TEMPLATE_FILE_PATH);
const publicIndex = join(__dirname, "..", "public", "index.html");
const tmpFolder = join(__dirname, process.env.TMP_FOLDER);

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.static("public"));
app.use(express.json());
const port = process.env.PORT;

app.post('/internal-api/preview', (req, res) => {
    const mjmlCode = req.body.content;
    res.send(transformToHtml(mjmlCode));
});

app.post('/internal-api/save-file', (req, res) => {
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

app.get('/internal-api/list-files', (req, res) => {
    const files = fs.readdirSync(savedFilePath);
    res.json(files);
});

app.post('/internal-api/get-file', (req, res) => {
    const fileName = req.body.fileName;
    const fileContent = fs.readFileSync(join(savedFilePath,fileName));
    res.json({content: fileContent.toString(), preview: transformToHtml(fileContent.toString())});
});

app.post('/internal-api/save-template', (req, res) => {
    const content = req.body.content;
    const fileName = req.body.name;
    try {
        fs.writeFileSync(join(templateFilePath, fileName), content);
    } catch(error) {
        res.sendStatus(500);
    }
    res.send(transformToHtml(content));
});


app.get('/internal-api/list-templates', (req, res) => {
    const templates = fs.readdirSync(templateFilePath);
    res.json(templates);
});

app.get('/internal-api/get-template', (req, res) => {
    const templateName = req.body.templateName;
    const templateContent = fs.readFileSync(join(templateFilePath, templateName));
    res.json({ content: templateContent.toString(), preview: transformToHtml(templateContent.toString())});
});

app.post('/internal-api/download-html', (req, res) => {
    const mjmlCode = req.body.content;
    const html = transformToHtml(mjmlCode);
    const fileName = randomUUID() + ".html";
    try {
        fs.writeFileSync(join(tmpFolder, fileName), html);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    res.download(join(tmpFolder, fileName), fileName, function(err) {
        if (!err) {
            fs.unlinkSync(join(tmpFolder, fileName));
        }
    });
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
