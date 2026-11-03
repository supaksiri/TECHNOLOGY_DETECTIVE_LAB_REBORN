import type {CaseProgress,LabId} from '../types';
export function isLabUnlocked(lab:LabId,p:CaseProgress){if(lab===1)return true;if(lab===2)return p.found.length>=5;if(lab===3)return p.found.length>=5;if(lab===4)return p.simulationDone&&p.found.length>=5;if(lab===5)return Object.keys(p.network).length===5;return false;}
export const initialProgress=():CaseProgress=>({found:[],links:{},network:{} as CaseProgress['network'],simulationDone:false,simulationResult:'',quizAnswers:{},complete:false});
