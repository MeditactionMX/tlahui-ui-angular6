import { TableColumn } from './table-column';
import { ILocalizable } from '../custom-attributes/i-localizable';

export interface IUIColumn{
     Language?: string;
     Culture?: string;
     Traslation?: string;
     Context?: string;
     TraslationId?: string;
     Plural?: string;
     ShortId?: string;
     GroupId?: string;

}

export class UIColumn extends TableColumn implements IUIColumn, ILocalizable {
    public Language?: string;
    public Culture?: string;
    public Traslation?: string;
    public Context?: string;
    public TraslationId?: string;
    public Plural?: string;
    public ShortId?: string;
    public GroupId?: string;
    constructor(){
        super();    
    }

}