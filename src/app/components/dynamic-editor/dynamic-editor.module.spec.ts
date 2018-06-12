import { DynamicEditorModule } from './dynamic-editor.module';

describe('DynamicEditorModule', () => {
  let dynamicEditorModule: DynamicEditorModule;

  beforeEach(() => {
    dynamicEditorModule = new DynamicEditorModule();
  });

  it('should create an instance', () => {
    expect(dynamicEditorModule).toBeTruthy();
  });
});
