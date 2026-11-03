import {evidence} from './cases';
/** Stable data contract for three future printable worksheets. No worksheet is generated at this stage. */
export const worksheetContract={version:1,caseId:'smart-farm',page1:{evidenceIds:evidence.map(e=>e.id),domainIds:['science','mathematics','engineering','design','social']},page2:{scenarioIds:['dry','wet','broken-sensor','blocked-pipe'],requiredFields:['scenario','moisture','threshold','flow','minutes','liters','reason']},page3:{requiredDomains:['science','mathematics','engineering','design','social'],requiredFields:['evidence','reason']}};
