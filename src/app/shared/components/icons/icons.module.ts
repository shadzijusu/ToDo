import { NgModule } from '@angular/core';

import { AddIconComponent } from './add-icon.component';
import { CompleteTaskComponent } from './complete-task-icon.component';
import { DownIconComponent } from './down-icon.component';
import { EditIconComponent } from './edit-icon.component';
import { FilterIconComponent } from './filter-icon.component';
import { HomeIconComponent } from './home-icon.component';
import { QuestionIconComponent } from './question-icon.component';
import { SearchIconComponent } from './search-icon.component';
import { StatsIconComponent } from './stats-icon.component';
import { UserIconComponent } from './user-icon.component';

@NgModule({
    imports: [],
    exports: [
        QuestionIconComponent, 
        SearchIconComponent, 
        HomeIconComponent, 
        AddIconComponent, 
        StatsIconComponent, 
        DownIconComponent, 
        EditIconComponent, 
        CompleteTaskComponent,
        UserIconComponent,
        FilterIconComponent
    ],
    declarations: [
        QuestionIconComponent, 
        SearchIconComponent, 
        HomeIconComponent,
        AddIconComponent, 
        StatsIconComponent, 
        DownIconComponent, 
        EditIconComponent, 
        CompleteTaskComponent,
        UserIconComponent,
        FilterIconComponent
    ],
    providers: [],
})
export class IconsModule { }
