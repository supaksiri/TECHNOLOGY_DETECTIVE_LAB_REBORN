export type SensorCondition='working'|'broken';
export type PipeCondition='clear'|'blocked';
export interface IrrigationInputs {moisture:number;threshold:number;flow:number;minutes:number;sensor:SensorCondition;pipe:PipeCondition}
export interface IrrigationOutput{command:boolean;waterFlowing:boolean;liters:number;message:string}
export function simulateIrrigation(i:IrrigationInputs):IrrigationOutput{
 const command=i.sensor==='working' && i.moisture<i.threshold;
 const waterFlowing=command&&i.pipe==='clear';
 const liters=waterFlowing?Math.round(i.flow*i.minutes*100)/100:0;
 const message=i.sensor==='broken'?'เซนเซอร์เสีย: ระบบจำลองหยุดปั๊มเพื่อความปลอดภัย':!command?'ดินชื้นพอ: ระบบไม่สั่งปั๊ม':i.pipe==='blocked'?'ปั๊มได้รับคำสั่ง แต่ท่ออุดตันจึงไม่มีน้ำถึงแปลง':`รดน้ำ ${liters} ลิตร (อัตราการไหล × เวลา)`;
 return {command,waterFlowing,liters,message};
}
