export interface Config {
    query_url: string;
    attachments_url: string;
    external_contributions_url: string;
}
export default class Client {
    config: Config;
    token: string;
    base: string;
    userAgent: string;
    request: Function;
    _choiceLists: any;
    _classificationSets: any;
    _forms: any;
    _records: any;
    _projects: any;
    _memberships: any;
    _roles: any;
    _layers: any;
    _photos: any;
    _videos: any;
    _audio: any;
    _signatures: any;
    _attachments: any;
    _exports: any;
    _changesets: any;
    _shares: any;
    _views: any;
    _permissions: any;
    _reportTemplates: any;
    _query: any;
    _workflows: any;
    _workflowExecutions: any;
    _externalContributions: any;
    constructor(options: any);
    urlFromPath(path: any, base: any): string;
    call(requestOptions: any): Promise<unknown>;
    get(options: any): Promise<unknown>;
    post(options: any): Promise<unknown>;
    put(options: any): Promise<unknown>;
    delete(options: any): Promise<unknown>;
    url(path: any, base: any): string;
    get choiceLists(): any;
    get classificationSets(): any;
    get forms(): any;
    get records(): any;
    get memberships(): any;
    get projects(): any;
    get layers(): any;
    get roles(): any;
    get photos(): any;
    get attachments(): any;
    get videos(): any;
    get audio(): any;
    get signatures(): any;
    get changesets(): any;
    get exports(): any;
    get views(): any;
    get shares(): any;
    get permissions(): any;
    get reportTemplates(): any;
    get query(): any;
    get workflows(): any;
    get workflowExecutions(): any;
    get externalContributions(): any;
}
