import { GUIDEntity, IEntity, IBucketTrackable } from "../base";

export class Category extends GUIDEntity implements IEntity, IBucketTrackable {
    public BucketId: string;
    public Name: string;
    public Description: string;
    public KeyWords: string;
    public DisplayOrder: number;
    public Published: boolean;
    public Categories: Array<Category>;
    public ParentCategoryId: string;
    public ParentCategory: Category;

    constructor(){
        super();
    }
}