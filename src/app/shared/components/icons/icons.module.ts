import { NgModule } from '@angular/core';

import { AddIconComponent } from './add-icon.component';
import { HomeIconComponent } from './home-icon.component';
import { QuestionIconComponent } from './question-icon.component';
import { SearchIconComponent } from './search-icon.component';

@NgModule({
    imports: [],
    exports: [QuestionIconComponent, SearchIconComponent, HomeIconComponent, AddIconComponent],
    declarations: [QuestionIconComponent, SearchIconComponent, HomeIconComponent, AddIconComponent],
    providers: [],
})
export class IconsModule { }
