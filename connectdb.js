import * as fs from 'fs';
import { TemplateHandler } from 'easy-template-x';

// 1. read template file
const templateFile = fs.readFileSync('./template.docx');

// 2. process the template
const dataEvent = '{"Beers": [ { "Brand": "Carlsberg", "Price": 1 },{ "Brand": "Leaf Blonde", "Price": 2 },{ "Brand": "Weihenstephan", "Price": 1.5 }]}'

// const handler = new TemplateHandler();
// const doc = await handler.process(templateFile, JSON.parse(dataEvent));
// fs.writeFileSync('./myTemplate - output.docx', doc);

const test = async (data) => {
    console.log('convert ' + JSON.parse(data))
    const handler = new TemplateHandler();
    const doc = await handler.process(templateFile, JSON.parse(data));

    // 3. save output
    fs.writeFileSync('./myTemplate - output.docx', doc);
}
export { test }