export class User {
  constructor(
    public username: string,
    public avatarUrl: string,
    public name: string,
    public bio: string,
    public location: string,
    public repos: string,
    public reposLink: string
  ) {
      this.username = username,
      this.avatarUrl = avatarUrl,
      this.name = name,
      this.bio = bio,
      this.location = location,
      this.repos = repos,
      this.reposLink = reposLink
  }
}
