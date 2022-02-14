export class Repo {
  constructor(
    public repoName: string,
    public owner: string,
    public repoUrl: string,
    public description: string
  ) {
    this.repoName = repoName;
    this.owner = owner;
    this.repoUrl = repoUrl;
    this.description = description;
  }
}
