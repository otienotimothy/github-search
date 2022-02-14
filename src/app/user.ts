export class User {
  constructor(
    public username: string,
    public avatarUrl: string,
    public name: string,
    public bio: string,
    public location: string,
    public repos: string,
    public hireable:boolean,
    public followers: number,
    public following: number,
    public createdAt: Date
  ) {
      this.username = username,
      this.avatarUrl = avatarUrl,
      this.name = name,
      this.bio = bio,
      this.location = location,
      this.repos = repos,
      this.hireable = hireable,
      this.followers = followers,
      this.following = following,
      this.createdAt = createdAt
  }
}
