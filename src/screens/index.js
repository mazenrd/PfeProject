import Notfound from "./NotFound";
import Private from "./Private";
import Public from "./Public";

export default [...Private, ...Public, { component: Notfound }];
