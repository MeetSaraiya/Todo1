export class TodoModel{
    sno : number;
    title : string;
    desc : string;
    status : boolean;
    constructor(){
        this.sno=0;
        this.desc="";
        this.status=false;
        this.title="";
    }
}