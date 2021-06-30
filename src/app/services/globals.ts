import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    public darkMode: boolean;

    constructor() {
        this.darkMode = true;
    }
}