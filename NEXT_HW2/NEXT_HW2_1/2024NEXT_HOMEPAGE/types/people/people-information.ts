import { StaticImageData } from "next/image";

export interface PEOPLE_INFORMATION_TYPE {
  gen: number;
  name: string;
  department: string;
  classOf: number;
  imgSrc: string;
  masterDegree?: string;
  secondMajor?: string;
  managementTeam: string;
}
