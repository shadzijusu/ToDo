import { NgModule } from '@angular/core';

import { AddIconComponent } from './add-icon.component';
import { DownIconComponent } from './down-icon.component';
import { EditIconComponent } from './edit-icon.component';
import { HomeIconComponent } from './home-icon.component';
import { QuestionIconComponent } from './question-icon.component';
import { SearchIconComponent } from './search-icon.component';
import { StatsIconComponent } from './stats-icon.component';

@NgModule({
    imports: [],
    exports: [QuestionIconComponent, SearchIconComponent, HomeIconComponent, AddIconComponent, StatsIconComponent, DownIconComponent, EditIconComponent],
    declarations: [QuestionIconComponent, SearchIconComponent, HomeIconComponent, AddIconComponent, StatsIconComponent, DownIconComponent, EditIconComponent],
    providers: [],
})
export class IconsModule { }
