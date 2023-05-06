import express from 'express';
import mjml2html from 'mjml';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());
const port = process.env.PORT;

app.post('/internal-api/convert', (req, res) => {
    const mjmlCode = req.body.content;
    res.send(transformToHtml(mjmlCode));
});

app.listen(port, () => {
    return console.log("Listening", port);
});


function transformToHtml(mjmlCode: string): string{
    return mjml2html(mjmlCode).html;
}
