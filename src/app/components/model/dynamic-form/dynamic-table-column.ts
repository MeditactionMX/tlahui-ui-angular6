import { UIColumn } from  'tlahui-webapi-client';

export class DynamicTableColumn extends UIColumn{

    public ForceVisible: boolean;
    public Column: number;

    constructor(){
        super();
        this.ForceVisible=false;
        this.Column=1;
    }

 
}