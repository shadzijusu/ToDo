import { NgModule } from '@angular/core';

import { AddIconComponent } from './add-icon.component';
import { DownIconComponent } from './down-icon.component';
import { HomeIconComponent } from './home-icon.component';
import { QuestionIconComponent } from './question-icon.component';
import { SearchIconComponent } from './search-icon.component';
import { StatsIconComponent } from './stats-icon.component';

@NgModule({
    imports: [],
    exports: [QuestionIconComponent, SearchIconComponent, HomeIconComponent, AddIconComponent, StatsIconComponent, DownIconComponent],
    declarations: [QuestionIconComponent, SearchIconComponent, HomeIconComponent, AddIconComponent, StatsIconComponent, DownIconComponent],
    providers: [],
})
export class IconsModule { }
