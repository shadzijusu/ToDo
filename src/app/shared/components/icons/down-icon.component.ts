import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'down-icon',
    template: `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`
})

export class DownIconComponent{
   @Input() classNames="w-5 h-5"
}