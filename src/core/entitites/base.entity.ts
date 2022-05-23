export default class BaseEntity {
  private data: any;
  private errors: any[];

  constructor(data: any, errors: []) {
    this.data = data;
    this.errors = errors;
  }
}
