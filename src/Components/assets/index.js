import Avatar1 from "../assets/userImages/photo-1438761681033-6461ffad8d80.jpeg";
import Avatar2 from "../assets/userImages/photo-1463453091185-61582044d556.jpeg";
import Avatar3 from "../assets/userImages/photo-1503467913725-8484b65b0715.jpeg";
//import Avatar4 from "../assets/userImages/photo-1519345182560-3f2917c472ef.jpeg";
//import Avatar5 from "../assets/userImages/photo-1506089676908-3592f7389d4d.jpeg";
//import Avatar6 from "../assets/userImages/photo-1507003211169-0a1dd7228f2d.jpeg";
//import Avatar7 from "../assets/userImages/photo-1517202383675-eb0a6e27775f.jpeg";
//import Avatar8 from "../assets/userImages/photo-1531251445707-1f000e1e87d0.jpeg";
//import Avatar9 from "../assets/userImages/photo-1541271696563-3be2f555fc4e.jpeg";

export { AddChannel } from "./AddChannel";
export { BoldIcon } from "./BoldIcon";
export { ChannelInfo } from "./ChannelInfo";
export { CloseCreateChannel } from "./CloseCreateChannel";
export { CloseThreadIcon } from "./CloseThreadIcon";
export { CodeSnippet } from "./CodeSnippet";
export { HashIcon } from "./HashIcon";
export { InviteIcon } from "./InviteIcon";
export { ItalicsIcon } from "./ItalicsIcon";
export { LightningBolt } from "./LightningBolt";
export { LightningBoltSmall } from "./LightningBoltSmall";
export { PinIcon } from "./PinIcon";
export { SearchIcon } from "./SearchIcon";
export { SendButton } from "./SendButton";
export { SideBarFlag } from "./SideBarFlag";
export { SideBarLogo } from "./SideBarLogo";
export { SmileyFace } from "./SmileyFace";
export { StrikeThroughIcon } from "./StrikeThroughIcon";

const randomImages = [
  Avatar1,
  Avatar2,
  Avatar3
  //Avatar4,
  //Avatar5,
  //Avatar6,
  //Avatar7,
  //Avatar8,
  //Avatar9
];

export const getRandomImage = () => {
  const index = Math.floor(Math.random() * 3);
  return randomImages[index];
};
