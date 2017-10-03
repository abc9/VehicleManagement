import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: '1st',
            text: 'Vehicle Management.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: '2nd',
            text: 'Vehicle Description.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: '3rd',
            text: 'Vehicle Type.'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Hello`
        }, {
            id: 2,
            type: 'warning',
            message: `Bye`
        });
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
