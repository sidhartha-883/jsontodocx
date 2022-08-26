import docxConverter  from 'docx-pdf';
import * as fs from 'fs';

docxConverter('./myTemplate - output.docx','./output.pdf',function(err,result){
    if(err){
      console.log(err);
    }
    console.log('result'+result);
  });