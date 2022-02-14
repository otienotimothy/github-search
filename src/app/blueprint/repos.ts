export class Repos {
  constructor(
    public repoName: string,
    public owner: string,
    public repoUrl: string
  ) {
    this.repoName = repoName;
    this.owner = owner;
    this.repoUrl = repoUrl;
  }
}
