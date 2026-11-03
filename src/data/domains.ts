import type {DomainId} from '../types';
export const domains:{id:DomainId;label:string;description:string;symbol:string}[]=[
{id:'science',label:'วิทยาศาสตร์',description:'ศึกษาธรรมชาติ พืช และสมบัติของวัสดุ',symbol:'◉'},
{id:'mathematics',label:'คณิตศาสตร์',description:'คำนวณปริมาณ อัตราการไหล และเวลา',symbol:'∑'},
{id:'engineering',label:'วิศวกรรมศาสตร์',description:'ออกแบบและประกอบระบบให้ทำงานสัมพันธ์กัน',symbol:'⚙'},
{id:'design',label:'ศิลปะและการออกแบบ',description:'ออกแบบส่วนติดต่อและรูปแบบการใช้งาน',symbol:'◇'},
{id:'social',label:'สังคมศาสตร์',description:'สำรวจความต้องการและพฤติกรรมผู้ใช้',symbol:'◎'}];
export const nameOf=(id:DomainId)=>domains.find(d=>d.id===id)?.label??id;
