import { DataType, UIColumn } from ".";

export enum SearchComparer {
    none=0, eq=1, gt=2, lt=3, gte=4, lte=5, starts=10, ends=11, contains=12, in=20, between=30
}


export class SearchOperand{
     public Value1: any;
     public Value2: any;
     public Comparer: SearchComparer;
     public Negation: boolean;
     public BaseType: DataType;
     public ListSeparator: string;
     public FieldId: string;
     public FieldGroupId: string;

     constructor(){


     }

     public FromUIColumn(column: UIColumn){
        this.FieldGroupId=column.GroupId;
        this.FieldId=column.ShortId;
        this.BaseType=column.Type;
     }

}


export class SearchCollection{
    public Operands: Array<SearchOperand>;
    constructor(){
        this.Operands=[];
    }
}