import { Injectable } from '@angular/core';

@Injectable()
export class NameListService {
    private legends = [
        'Jimmy Page',
        'Micky Jagger',
        'Angus Young',
        'Bob Dylan',
        'Robert Plant',
        'Roger Waters',
        'Syd Barrett',
        'David Gilmour',
        'Janis Joplin',
        'John Lennon',
        'Jimmy Hendrix',
        'Ozzy Osbourne',
        'Zakk Wylde',
        'Randy Rhoads',
        'Malcolm Young',
        'Axl Rose',
        'Slash',
        'Lemmy',
        'Eddie Clarke',
        'John Bonham',
        'John Paul Jones',
        'Freddie Mercury'
    ];

    public get listOut(): string[] {
        return this.legends;
    }

    public set listIn(list: string[]) {
        this.legends = list;
    }
}