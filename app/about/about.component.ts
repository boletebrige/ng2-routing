import { Component } from '@angular/core';
// this is beacause of type safety it isn't necessary
export class User {
    id: number;
    name: string;
    username: string;
    avatar: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Josip',
        username: 'boletebrige',
        avatar: 'https://pbs.twimg.com/profile_images/827146559192170496/hxBWvDiC_400x400.jpg'
    },
    {
        id: 2,
        name: 'Nema',
        username: 'nikad',
        avatar: 'https://pbs.twimg.com/profile_images/738655910067851264/kMTd4Z8c_400x400.jpg'
    },
    {
        id: 3,
        name: 'Niko',
        username: 'nije',
        avatar: 'https://pbs.twimg.com/profile_images/693910281945243648/Fov72uA0_400x400.jpg'
    }
]

@Component({
    selector: 'about-page',
    templateUrl: './app/about/about.component.html',
    styleUrls: ['./app/about/about.component.css']
})

export class AboutComponent {
    users: User[] = users;
}