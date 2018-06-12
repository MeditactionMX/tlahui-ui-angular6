import { GUIDEntity, ITrackableEntity } from "../base";

export class Bucket extends GUIDEntity implements ITrackableEntity {
    public CreateDate: Date;
    public CreatorId: string;
    public UpdateDate: Date;
    public ModifierId: string;
    public UserId: string;
    public Name: string;
    public constructor(){
        super();
    }

}