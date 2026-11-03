export type DomainId='science'|'mathematics'|'engineering'|'design'|'social';
export type LabId=1|2|3|4|5;
export interface Evidence{ id:string; name:string; detail:string; domains:DomainId[]; rationale:string; position:[number,number,number];}
export interface DetectiveCase{ id:string; name:string; thai:string; summary:string; status:'playable'|'planned'; icon:string; }
export interface Question{ id:string; prompt:string; options:string[]; correct:number; explanation:string; domain:DomainId; }
export interface CaseProgress{ found:string[]; links:Record<string,DomainId[]>; network:Record<DomainId,string>; simulationDone:boolean; simulationResult:string; quizAnswers:Record<string,number>; complete:boolean; }
