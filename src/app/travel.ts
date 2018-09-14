export class Travel {
  public showDescription:boolean;
  constructor(public destination:string,public id:number,public plans:string){
    this.showDescription=false
  }
}
