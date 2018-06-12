import { GUIDEntity, IEntity, IBucketTrackable } from "../base";

export enum DataType {
    text = 1, integer_number = 10, decimal_number=11, date = 20, time = 21, datetime = 22, boolean = 3
}

export class TableColumn  {
    public DisplayByDefault: boolean;
    public Searchable: boolean;
    public DisplayIndex: number;
    public Type: DataType;
    public OutpuFormat: string;
    public IsID: boolean;
    public AlwaysHidden: boolean;

    constructor(){
        
    }
}