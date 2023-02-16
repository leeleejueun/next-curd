// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import db from 'data/db.json';
let fs = require('fs'); //기본으로 탑재되어있음
let db = require('data/db.json');

export default function handler(req, res) { //res get으로 요청했을떄 응답하기 위한 method
  const {method, body}=req;
  switch(method){
    case 'GET' : dataGet(); break; // url로 데이터 전송
    case 'POST' : dataCreate(); break; // body안에 데이터 전송
    case 'PUT' : dataUpdate(); break;
    case 'DELETE' : dataDelete(); break;
  }

  function dataGet(){
    res.status(200).json(db);
    //res.send('확인') join({data: aaa , me})
  }

  function dataCreate(){
    
    db.push(body);
   /*  console.log(db) */
    saveData(); 
  }

  function dataUpdate(){
    let user = db.find( obj => obj.id == body.id );
    Object.assign(user,body)
    saveData();
  }

  function dataDelete(){
    db = db.filter( obj => obj.id !== body );
    saveData();
  }

  function saveData(){
    //읽기 쓰기 동기읽기 비동기읽기 
    fs.writeFileSync('data/db.json', JSON.stringify(db));//문서에 해당값을 써줌
    res.status(200).json(db);
    
    
  }
  //res.status(200).json({ name: 'John Doe' }) //status(200)=>정상적으로 성공했을경우 보내주는값?

}
