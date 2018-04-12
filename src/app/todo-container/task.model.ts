export class Task {
  public title: string;
  public description: string;
  public createdAt: string;

  constructor(title: string, description: string, createdAt: string) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
  }
}
