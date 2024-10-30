export interface Organization {
    id: number;
    name: string;
    staff: Staff[];
    students: Student[];
}

export interface Staff {
    id: number;
    organisationId: number;
    firstName: string;
    lastName: string;
    email: string;
    permissions: Permission[];
}

export type Permission = 'addStudent' | 'removeStudent' | 'viewAssessments' | 'updateAssessments';

export interface Student {
    id: number;
    organisationId: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date; // ISO-8601
    cohort: Cohort;
    assessment?: Assessment;
}

export interface Cohort {
    id: number;
    name: string;
    organisationId: number;
    students: Student[];
}

export interface Assessment {
    id: number;
    studentId: number;
    date: Date; // ISO-8601
    outcome: 'Clear' | 'Moderate' | 'Severe';
    needsIntervention: boolean;
}