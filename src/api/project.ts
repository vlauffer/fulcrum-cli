// @ts-nocheck

import List from './actions/list';
import Find from './actions/find';
import Resource from './resource';

export default class Project extends Resource {
  get resourceName() {
    return 'project';
  }

  get resourcesName() {
    return 'projects';
  }
}

List.includeInto(Project);
Find.includeInto(Project);
