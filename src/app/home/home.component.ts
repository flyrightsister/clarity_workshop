/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { PhotoService } from "../photo.service";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [ PhotoService ]
})
export class HomeComponent {
    public photos: object[];

    constructor(public photoService: PhotoService) {}


onClick(value: string) {
       this.photos = [];
        this.photoService.getPhoto(value).subscribe(
            data => {
                data.photos.photo.forEach (photo => {
                    let photoData = {url: null, caption: null};
                    // let = es6 syntax for scoped variable
                    photoData.url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                    // backticks are string interpolation

                    photoData.caption = photo.title;
                    this.photos.push(photoData);
                })
                // console.log(data);
            }
        );

        // you subscribe to an observable
    }
}