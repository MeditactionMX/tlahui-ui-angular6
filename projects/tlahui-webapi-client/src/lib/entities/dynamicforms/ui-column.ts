import { TableColumn } from './table-column';
import { ILocalizable } from '../custom-attributes/i-localizable';

export class UIColumn extends TableColumn implements ILocalizable {
    public Language: string;
    public Culture: string;
    public Traslation: string;
    public Context: string;
    public TraslationId: string;
    public Plural: string;
    public ShortId: string;

    constructor(){
        super();    
    }

}