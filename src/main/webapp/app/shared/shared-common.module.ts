import { NgModule } from '@angular/core';

import { TheRealNoriegaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TheRealNoriegaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TheRealNoriegaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TheRealNoriegaSharedCommonModule {}
