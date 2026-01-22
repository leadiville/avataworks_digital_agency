import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Iservice {
  _id?: string;
  title?: string;
  info?: string;
  imgSrc?: string;
  showInfo?: boolean;
  icon?: IconProp;
  fullInfo?: string;
  subServices?: [string];
}

export interface IfooterObj {
  _id?: string;
  title?: string;
  subtitle?: string;
  icon?: IconProp;
}
export interface IsocialLinks {
  _id?: string;
  instagram?: string;
  facebook?: string;
  LinkedIn?: string;
  X?: string;
  Tiktok?: string;
}
export interface Ifooter {
  _id?: string;
  footerAddress?: [IfooterObj];
  usefulLinks?: [string];
  socialLinks?: [IsocialLinks];
}
export interface Ifeatures {
  _id?: string;
  title?: string;
  info?: string;
  icon?: IconProp;
}
export interface WhyChooseUs {
  _id?: string;
  title?: string;
  content?: string;
  icon?: IconProp;
}
interface Ianswer {
  title?: string;
  description?: string;
}
export interface IfaqHome {
  _id?: string;
  showAnswer?: boolean;
  question?: string;
  answer?: string | Ianswer[] | string[];
}
export interface Ifaq {
  _id?: string;
  homePage?: IfaqHome[];
  servicePage?: IfaqHome[];
}
// Review and testimonies
export interface Ireviews {
  _id?: string;
  companyName?: string;
  companyPosition?: string;
  image?: string;
  logo?: string;
  review?: string;
  service?: string;
}

export interface IOurTeam {
  _id?: string;
  fullName?: string;
  skillSet?: string;
  image?: string;
}
