/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* http://bradmartin.net
* Open Source Lib : https://github.com/aurelhubert/ahbottomnavigation
*************************************************************************************/

import { View } from "ui/core/view";
import { Color } from "color";
import * as imageSource from "image-source";


let BitmapDrawable = android.graphics.drawable.BitmapDrawable;
let AHBottomNavigation = com.aurelhubert.ahbottomnavigation.AHBottomNavigation; /// https://github.com/aurelhubert/ahbottomnavigation/blob/master/ahbottomnavigation/src/main/java/com/aurelhubert/ahbottomnavigation/AHBottomNavigation.java#L1
let AHBottomNavigationItem = com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem; /// https://github.com/aurelhubert/ahbottomnavigation/blob/master/ahbottomnavigation/src/main/java/com/aurelhubert/ahbottomnavigation/AHBottomNavigationItem.java#L86


declare var com, android: any;


export class NavigationItem { }

export interface INavigationItem {
    index: number;
    title: string;
    icon: string;
    color: string;
}

export class BottomNavigation extends View {
    private _android: com.aurelhubert.ahbottomnavigation.AHBottomNavigation;

    get android(): any {
        return this._android;
    }

    get _nativeView(): any {
        return this._android;
    }


    get currentIndex(): number {
        return this._android.getCurrentItem();
    }


    public _createUI() {

        this._android = new AHBottomNavigation(this._context);


        let icon1 = new BitmapDrawable(imageSource.fromResource('ic_cake_white_24dp').android);
        let icon2 = new BitmapDrawable(imageSource.fromResource('ic_favorite_white_24dp').android);
        let icon3 = new BitmapDrawable(imageSource.fromResource('ic_settings_white_24dp').android);


        let item = new AHBottomNavigationItem('Cake', icon1, new Color('#4CAF50').android);
        let item2 = new AHBottomNavigationItem('Favorites', icon2, new Color('#2196F3').android);
        let item3 = new AHBottomNavigationItem('Settings', icon3, new Color('#FF4081').android);


        // Add items        
        this._android.addItem(item);
        this._android.addItem(item2);
        this._android.addItem(item3);


        // Add items        
        this._android.addItem(item);

        // Set background color
        this._android.setDefaultBackgroundColor(new Color('#333').android);

        // Use colored navigation with circle reveal effect
        this._android.setColored(true);

    }

}