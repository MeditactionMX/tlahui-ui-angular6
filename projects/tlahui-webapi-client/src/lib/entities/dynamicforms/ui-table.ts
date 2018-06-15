import { GUIDEntity, IEntity, IBucketTrackable } from "../base";
import { ILocalizable } from "../custom-attributes/i-localizable";
import { UIColumn } from "./ui-column";

export interface IUITable{
     GroupId?: string;
     Language?: string;
     Culture?: string;
     Traslation?: string;
     Context?: string;
     TraslationId?: string;
     Plural?: string;
     ShortId?: string;
     Columns?: Array<UIColumn>

}


export class UITable  implements IUITable, ILocalizable  {
    public GroupId: string;
    public Language: string;
    public Culture: string;
    public Traslation: string;
    public Context: string;
    public TraslationId: string;
    public Plural: string;
    public ShortId: string;
    public Columns: Array<UIColumn>

    constructor(){
       this.Columns=[];
    }
}