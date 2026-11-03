import {evidence,questions} from '../data/cases';import type {CaseProgress,DomainId} from '../types';
export function calculateScore(p:CaseProgress){
 const investigation=Math.round(20*p.found.filter(id=>evidence.some(e=>e.id===id)).length/evidence.length);
 const matches=evidence.reduce((n,e)=>n+e.domains.filter(d=>p.links[e.id]?.includes(d)).length,0);
 const wrong=evidence.reduce((n,e)=>n+(p.links[e.id]||[]).filter(d=>!e.domains.includes(d)).length,0);
 const total=evidence.reduce((n,e)=>n+e.domains.length,0);
 const knowledge=Math.round(30*Math.max(0,matches-wrong)/total);
 const simulation=p.simulationDone?20:0;
 const network=Object.entries(p.network).reduce((n,[domain,id])=>n+(evidence.find(e=>e.id===id)?.domains.includes(domain as DomainId)?4:0),0);
 const trial=Math.round(10*questions.filter(q=>p.quizAnswers[q.id]===q.correct).length/questions.length);
 return {investigation,knowledge,simulation,network,trial,total:investigation+knowledge+simulation+network+trial};
}
