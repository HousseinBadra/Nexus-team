export type Project = {
  creator: string;
  collaborators: string[];
  name: string;
  description: string;
  keywords: string[];
  researchFields: string[];
  status: ProjectStatus;
  sponsors: string[];
  geographicScope: string;
  participantsAge: string[];
  goals: string[];
  participationTasks: string[];
  email: string;
  startDate: Date;
  watching: string[];
};

export enum ProjectStatus {
  ACTIVE = 'active',
  ACTIVE_SEASONAL = 'active_seasonal',
  INACTIVE = 'inactive',
  COMPLETED = 'completed',
  HIATUS = 'hiatus',
  PENDING = 'pending',
}
