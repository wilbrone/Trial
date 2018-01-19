import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	name:any;

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
  	this.route.params.forEach((_params: Params) => {
  		this.name = _params['name']
  	})
  }
}
