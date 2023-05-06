import express from 'express';
import mjml2html from 'mjml';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT;

app.get('/internal-api/convert', (req, res) => {
    const mjmlCode = req.body.content;
    res.send(transformToHtml(mjmlCode));
});


app.listen(port, () => {
    return console.log("Listening");
});


function transformToHtml(mjmlCode: string): string{
    return mjml2html(mjmlCode).html;
}
