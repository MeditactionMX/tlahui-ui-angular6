import { GUIDEntity, IEntity, IBucketTrackable } from "../base";
import { ILocalizable } from "../custom-attributes/i-localizable";
import { UIColumn } from "./ui-column";

export class UITable  implements ILocalizable  {
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