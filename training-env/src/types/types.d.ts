export interface Job {
  leftSide: LeftSide;
  rightSide: RightSide;
}

type leftSide = {
  jobTitle: string;
  company: string;
  location: string;
  pay: string;
  rate: string;
  time: string;
  schedule: string;
  link: string;
};

type rightSide = {
  jobTitle: string;
  company: string;
  location: string;
  workSchedule: string;
  jobDescription: string;
};

export type JobSide = {
  jobTitle: string;
  company: string;
  location: string;
  pay: string;
  rate: string;
  time: string;
  schedule: string;
  link: string;
};

export type JobPair = {
  leftSide: JobSide;
  rightSide: {
    jobTitle: string;
    company: string;
    location: string;
    workSchedule: string;
    jobDescription: string;
  };
};
