import * as fs from 'fs';
import { TemplateHandler } from 'easy-template-x';

// 1. read template file
const templateFile = fs.readFileSync('template.docx');

// const data = {
//     "Beers": [
//       { "Brand": "Carlsberg", "Price": 1 },
//       { "Brand": "Leaf Blonde", "Price": 2 },
//       { "Brand": "Weihenstephan", "Price": 1.5 }
//     ]
//   }

// const handler = new TemplateHandler();
// const doc = await handler.process(templateFile, data);

// 3. save output
//fs.writeFileSync('myTemplate - output.docx', doc);
const handler = new TemplateHandler();
const test = async (data) => {
    console.log(data)
    const doc = await handler.process(templateFile, data);

    // 3. save output
    fs.writeFileSync('result.docx', doc);
}
export { test }
