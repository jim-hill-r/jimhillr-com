import { Activity } from '../app/model/activity';

export const ACTIVITIES_MOCK: Activity[] = [
  { id: 1, timestamp: new Date(2018, 3, 5, 16, 32, 12), comments: "Arete pullups were not the way to go!", details: [{ id: 1, type: "CLIMB" }] },
  { id: 2, timestamp: new Date(2018, 3, 5, 16, 49, 19), comments: "Do not backstep the volume!", details: [{ id: 2, type: "CLIMB" }] }
];



